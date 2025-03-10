/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetResponsePlanResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public GetResponsePlanResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public GetResponsePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetResponsePlanOutput getResponsePlanOutput;

    public GetResponsePlanResponse withGetResponsePlanOutput(org.openapis.openapi.models.shared.GetResponsePlanOutput getResponsePlanOutput) {
        this.getResponsePlanOutput = getResponsePlanOutput;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public GetResponsePlanResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetResponsePlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetResponsePlanResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetResponsePlanResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public GetResponsePlanResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetResponsePlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetResponsePlanResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
