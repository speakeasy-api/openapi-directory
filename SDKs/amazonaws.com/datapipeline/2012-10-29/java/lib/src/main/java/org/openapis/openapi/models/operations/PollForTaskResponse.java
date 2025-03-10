/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PollForTaskResponse {
    
    public String contentType;

    public PollForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServiceError
     */
    
    public Object internalServiceError;

    public PollForTaskResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public PollForTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.PollForTaskOutput pollForTaskOutput;

    public PollForTaskResponse withPollForTaskOutput(org.openapis.openapi.models.shared.PollForTaskOutput pollForTaskOutput) {
        this.pollForTaskOutput = pollForTaskOutput;
        return this;
    }
    
    
    public Integer statusCode;

    public PollForTaskResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PollForTaskResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TaskNotFoundException
     */
    
    public Object taskNotFoundException;

    public PollForTaskResponse withTaskNotFoundException(Object taskNotFoundException) {
        this.taskNotFoundException = taskNotFoundException;
        return this;
    }
    
    public PollForTaskResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
