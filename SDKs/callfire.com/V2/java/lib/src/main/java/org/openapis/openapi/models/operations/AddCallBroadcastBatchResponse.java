/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AddCallBroadcastBatchResponse {
    
    public String contentType;

    public AddCallBroadcastBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;

    public AddCallBroadcastBatchResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    /**
     * successful operation
     */
    
    public org.openapis.openapi.models.shared.ResourceId resourceId;

    public AddCallBroadcastBatchResponse withResourceId(org.openapis.openapi.models.shared.ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    
    
    public Integer statusCode;

    public AddCallBroadcastBatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AddCallBroadcastBatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AddCallBroadcastBatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
