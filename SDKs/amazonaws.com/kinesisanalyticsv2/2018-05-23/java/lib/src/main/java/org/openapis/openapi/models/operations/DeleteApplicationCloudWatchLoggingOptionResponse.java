/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteApplicationCloudWatchLoggingOptionResponse {
    /**
     * ConcurrentModificationException
     */
    
    public Object concurrentModificationException;

    public DeleteApplicationCloudWatchLoggingOptionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    
    
    public String contentType;

    public DeleteApplicationCloudWatchLoggingOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DeleteApplicationCloudWatchLoggingOptionResponse deleteApplicationCloudWatchLoggingOptionResponse;

    public DeleteApplicationCloudWatchLoggingOptionResponse withDeleteApplicationCloudWatchLoggingOptionResponse(org.openapis.openapi.models.shared.DeleteApplicationCloudWatchLoggingOptionResponse deleteApplicationCloudWatchLoggingOptionResponse) {
        this.deleteApplicationCloudWatchLoggingOptionResponse = deleteApplicationCloudWatchLoggingOptionResponse;
        return this;
    }
    
    /**
     * InvalidApplicationConfigurationException
     */
    
    public Object invalidApplicationConfigurationException;

    public DeleteApplicationCloudWatchLoggingOptionResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    
    /**
     * InvalidArgumentException
     */
    
    public Object invalidArgumentException;

    public DeleteApplicationCloudWatchLoggingOptionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public DeleteApplicationCloudWatchLoggingOptionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * ResourceInUseException
     */
    
    public Object resourceInUseException;

    public DeleteApplicationCloudWatchLoggingOptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DeleteApplicationCloudWatchLoggingOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteApplicationCloudWatchLoggingOptionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteApplicationCloudWatchLoggingOptionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DeleteApplicationCloudWatchLoggingOptionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
