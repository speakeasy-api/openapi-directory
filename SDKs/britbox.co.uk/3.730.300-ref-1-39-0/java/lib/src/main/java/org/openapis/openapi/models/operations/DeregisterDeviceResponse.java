/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeregisterDeviceResponse {
    
    public String contentType;

    public DeregisterDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad request.
     */
    
    public org.openapis.openapi.models.shared.ServiceError serviceError;

    public DeregisterDeviceResponse withServiceError(org.openapis.openapi.models.shared.ServiceError serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    
    
    public Integer statusCode;

    public DeregisterDeviceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeregisterDeviceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DeregisterDeviceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
