/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateSubscriberResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public CreateSubscriberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public CreateSubscriberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> createSubscriberResponse;

    public CreateSubscriberResponse withCreateSubscriberResponse(java.util.Map<String, Object> createSubscriberResponse) {
        this.createSubscriberResponse = createSubscriberResponse;
        return this;
    }
    
    /**
     * CreationLimitExceededException
     */
    
    public Object creationLimitExceededException;

    public CreateSubscriberResponse withCreationLimitExceededException(Object creationLimitExceededException) {
        this.creationLimitExceededException = creationLimitExceededException;
        return this;
    }
    
    /**
     * DuplicateRecordException
     */
    
    public Object duplicateRecordException;

    public CreateSubscriberResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    
    /**
     * InternalErrorException
     */
    
    public Object internalErrorException;

    public CreateSubscriberResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public CreateSubscriberResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public CreateSubscriberResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateSubscriberResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateSubscriberResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public CreateSubscriberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    public CreateSubscriberResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
