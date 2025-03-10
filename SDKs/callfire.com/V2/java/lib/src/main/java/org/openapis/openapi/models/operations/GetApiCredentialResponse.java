/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetApiCredentialResponse {
    /**
     * successful operation
     */
    
    public org.openapis.openapi.models.shared.ApiCredential apiCredential;

    public GetApiCredentialResponse withApiCredential(org.openapis.openapi.models.shared.ApiCredential apiCredential) {
        this.apiCredential = apiCredential;
        return this;
    }
    
    
    public String contentType;

    public GetApiCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;

    public GetApiCredentialResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public GetApiCredentialResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetApiCredentialResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetApiCredentialResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
