/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteTypedLinkFacetResponse {
    /**
     * AccessDeniedException
     */
    
    public org.openapis.openapi.models.shared.AccessDeniedException accessDeniedException;

    public DeleteTypedLinkFacetResponse withAccessDeniedException(org.openapis.openapi.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public DeleteTypedLinkFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> deleteTypedLinkFacetResponse;

    public DeleteTypedLinkFacetResponse withDeleteTypedLinkFacetResponse(java.util.Map<String, Object> deleteTypedLinkFacetResponse) {
        this.deleteTypedLinkFacetResponse = deleteTypedLinkFacetResponse;
        return this;
    }
    
    /**
     * FacetNotFoundException
     */
    
    public org.openapis.openapi.models.shared.FacetNotFoundException facetNotFoundException;

    public DeleteTypedLinkFacetResponse withFacetNotFoundException(org.openapis.openapi.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    
    /**
     * InternalServiceException
     */
    
    public org.openapis.openapi.models.shared.InternalServiceException internalServiceException;

    public DeleteTypedLinkFacetResponse withInternalServiceException(org.openapis.openapi.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    
    /**
     * InvalidArnException
     */
    
    public org.openapis.openapi.models.shared.InvalidArnException invalidArnException;

    public DeleteTypedLinkFacetResponse withInvalidArnException(org.openapis.openapi.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    
    /**
     * LimitExceededException
     */
    
    public org.openapis.openapi.models.shared.LimitExceededException limitExceededException;

    public DeleteTypedLinkFacetResponse withLimitExceededException(org.openapis.openapi.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteTypedLinkFacetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteTypedLinkFacetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public org.openapis.openapi.models.shared.ResourceNotFoundException resourceNotFoundException;

    public DeleteTypedLinkFacetResponse withResourceNotFoundException(org.openapis.openapi.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * RetryableConflictException
     */
    
    public org.openapis.openapi.models.shared.RetryableConflictException retryableConflictException;

    public DeleteTypedLinkFacetResponse withRetryableConflictException(org.openapis.openapi.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public org.openapis.openapi.models.shared.ValidationException validationException;

    public DeleteTypedLinkFacetResponse withValidationException(org.openapis.openapi.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public DeleteTypedLinkFacetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
