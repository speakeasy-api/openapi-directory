/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateFeaturedResultsSetResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public UpdateFeaturedResultsSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public UpdateFeaturedResultsSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * FeaturedResultsConflictException
     */
    
    public Object featuredResultsConflictException;

    public UpdateFeaturedResultsSetResponse withFeaturedResultsConflictException(Object featuredResultsConflictException) {
        this.featuredResultsConflictException = featuredResultsConflictException;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public UpdateFeaturedResultsSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateFeaturedResultsSetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateFeaturedResultsSetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public UpdateFeaturedResultsSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public UpdateFeaturedResultsSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.UpdateFeaturedResultsSetResponse updateFeaturedResultsSetResponse;

    public UpdateFeaturedResultsSetResponse withUpdateFeaturedResultsSetResponse(org.openapis.openapi.models.shared.UpdateFeaturedResultsSetResponse updateFeaturedResultsSetResponse) {
        this.updateFeaturedResultsSetResponse = updateFeaturedResultsSetResponse;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public UpdateFeaturedResultsSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public UpdateFeaturedResultsSetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
