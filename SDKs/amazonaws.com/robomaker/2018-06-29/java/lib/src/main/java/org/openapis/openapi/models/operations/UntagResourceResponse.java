/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UntagResourceResponse {
    
    public String contentType;

    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public UntagResourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public UntagResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public UntagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public UntagResourceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UntagResourceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public UntagResourceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> untagResourceResponse;

    public UntagResourceResponse withUntagResourceResponse(java.util.Map<String, Object> untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
    
    public UntagResourceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
