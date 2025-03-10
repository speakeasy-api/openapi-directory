/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetStoresResponse {
    
    public String contentType;

    public GetStoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK - the request has succeeded.
     */
    
    public org.openapis.openapi.models.shared.ListStoresResponse listStoresResponse;

    public GetStoresResponse withListStoresResponse(org.openapis.openapi.models.shared.ListStoresResponse listStoresResponse) {
        this.listStoresResponse = listStoresResponse;
        return this;
    }
    
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    
    public org.openapis.openapi.models.shared.RestServiceError restServiceError;

    public GetStoresResponse withRestServiceError(org.openapis.openapi.models.shared.RestServiceError restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    
    
    public Integer statusCode;

    public GetStoresResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetStoresResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetStoresResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
