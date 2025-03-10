/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdatePhoneNumberResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public UpdatePhoneNumberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public UpdatePhoneNumberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public UpdatePhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public UpdatePhoneNumberResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdatePhoneNumberResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdatePhoneNumberResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public UpdatePhoneNumberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public UpdatePhoneNumberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.UpdatePhoneNumberResult updatePhoneNumberResult;

    public UpdatePhoneNumberResponse withUpdatePhoneNumberResult(org.openapis.openapi.models.shared.UpdatePhoneNumberResult updatePhoneNumberResult) {
        this.updatePhoneNumberResult = updatePhoneNumberResult;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public UpdatePhoneNumberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public UpdatePhoneNumberResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
