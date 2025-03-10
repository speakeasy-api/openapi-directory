/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetPortalServiceProviderMetadataResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public GetPortalServiceProviderMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public GetPortalServiceProviderMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetPortalServiceProviderMetadataResponse getPortalServiceProviderMetadataResponse;

    public GetPortalServiceProviderMetadataResponse withGetPortalServiceProviderMetadataResponse(org.openapis.openapi.models.shared.GetPortalServiceProviderMetadataResponse getPortalServiceProviderMetadataResponse) {
        this.getPortalServiceProviderMetadataResponse = getPortalServiceProviderMetadataResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public GetPortalServiceProviderMetadataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetPortalServiceProviderMetadataResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetPortalServiceProviderMetadataResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetPortalServiceProviderMetadataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public GetPortalServiceProviderMetadataResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetPortalServiceProviderMetadataResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetPortalServiceProviderMetadataResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
