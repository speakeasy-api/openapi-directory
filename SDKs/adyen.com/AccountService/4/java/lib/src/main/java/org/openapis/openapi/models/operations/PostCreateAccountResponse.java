/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostCreateAccountResponse {
    
    public String contentType;

    public PostCreateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK - the request has succeeded.
     */
    
    public org.openapis.openapi.models.shared.CreateAccountResponse createAccountResponse;

    public PostCreateAccountResponse withCreateAccountResponse(org.openapis.openapi.models.shared.CreateAccountResponse createAccountResponse) {
        this.createAccountResponse = createAccountResponse;
        return this;
    }
    
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    
    public org.openapis.openapi.models.shared.ServiceError serviceError;

    public PostCreateAccountResponse withServiceError(org.openapis.openapi.models.shared.ServiceError serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    
    
    public Integer statusCode;

    public PostCreateAccountResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostCreateAccountResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostCreateAccountResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
