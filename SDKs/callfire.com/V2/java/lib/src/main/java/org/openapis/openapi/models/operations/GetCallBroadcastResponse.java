/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetCallBroadcastResponse {
    /**
     * successful operation
     */
    
    public org.openapis.openapi.models.shared.CallBroadcast callBroadcast;

    public GetCallBroadcastResponse withCallBroadcast(org.openapis.openapi.models.shared.CallBroadcast callBroadcast) {
        this.callBroadcast = callBroadcast;
        return this;
    }
    
    
    public String contentType;

    public GetCallBroadcastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;

    public GetCallBroadcastResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public GetCallBroadcastResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetCallBroadcastResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetCallBroadcastResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
