/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteConnectionResponse {
    
    public String contentType;

    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> deleteConnectionResponse;

    public DeleteConnectionResponse withDeleteConnectionResponse(java.util.Map<String, Object> deleteConnectionResponse) {
        this.deleteConnectionResponse = deleteConnectionResponse;
        return this;
    }
    
    /**
     * EntityNotFoundException
     */
    
    public Object entityNotFoundException;

    public DeleteConnectionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    
    /**
     * OperationTimeoutException
     */
    
    public Object operationTimeoutException;

    public DeleteConnectionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteConnectionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteConnectionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DeleteConnectionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
