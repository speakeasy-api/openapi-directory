/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteStreamResponse {
    /**
     * ClientLimitExceededException
     */
    
    public Object clientLimitExceededException;

    public DeleteStreamResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    
    
    public String contentType;

    public DeleteStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> deleteStreamOutput;

    public DeleteStreamResponse withDeleteStreamOutput(java.util.Map<String, Object> deleteStreamOutput) {
        this.deleteStreamOutput = deleteStreamOutput;
        return this;
    }
    
    /**
     * InvalidArgumentException
     */
    
    public Object invalidArgumentException;

    public DeleteStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    
    /**
     * NotAuthorizedException
     */
    
    public Object notAuthorizedException;

    public DeleteStreamResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteStreamResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteStreamResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceInUseException
     */
    
    public Object resourceInUseException;

    public DeleteStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DeleteStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * VersionMismatchException
     */
    
    public Object versionMismatchException;

    public DeleteStreamResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
    
    public DeleteStreamResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
