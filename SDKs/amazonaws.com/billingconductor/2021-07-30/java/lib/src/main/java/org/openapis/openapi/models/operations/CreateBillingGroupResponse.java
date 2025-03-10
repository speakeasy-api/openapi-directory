/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateBillingGroupResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public CreateBillingGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public CreateBillingGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public CreateBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateBillingGroupOutput createBillingGroupOutput;

    public CreateBillingGroupResponse withCreateBillingGroupOutput(org.openapis.openapi.models.shared.CreateBillingGroupOutput createBillingGroupOutput) {
        this.createBillingGroupOutput = createBillingGroupOutput;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public CreateBillingGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * ServiceLimitExceededException
     */
    
    public Object serviceLimitExceededException;

    public CreateBillingGroupResponse withServiceLimitExceededException(Object serviceLimitExceededException) {
        this.serviceLimitExceededException = serviceLimitExceededException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateBillingGroupResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateBillingGroupResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public CreateBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public CreateBillingGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public CreateBillingGroupResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
