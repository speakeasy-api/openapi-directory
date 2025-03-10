/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteBackendResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public DeleteBackendResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    
    public String contentType;

    public DeleteBackendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DeleteBackendResponse deleteBackendResponse;

    public DeleteBackendResponse withDeleteBackendResponse(org.openapis.openapi.models.shared.DeleteBackendResponse deleteBackendResponse) {
        this.deleteBackendResponse = deleteBackendResponse;
        return this;
    }
    
    /**
     * GatewayTimeoutException
     */
    
    public Object gatewayTimeoutException;

    public DeleteBackendResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public DeleteBackendResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteBackendResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteBackendResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public DeleteBackendResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    public DeleteBackendResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
