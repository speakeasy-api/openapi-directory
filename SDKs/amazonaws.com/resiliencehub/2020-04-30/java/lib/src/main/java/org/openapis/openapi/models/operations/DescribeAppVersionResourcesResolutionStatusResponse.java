/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeAppVersionResourcesResolutionStatusResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public DescribeAppVersionResourcesResolutionStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public DescribeAppVersionResourcesResolutionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeAppVersionResourcesResolutionStatusResponse describeAppVersionResourcesResolutionStatusResponse;

    public DescribeAppVersionResourcesResolutionStatusResponse withDescribeAppVersionResourcesResolutionStatusResponse(org.openapis.openapi.models.shared.DescribeAppVersionResourcesResolutionStatusResponse describeAppVersionResourcesResolutionStatusResponse) {
        this.describeAppVersionResourcesResolutionStatusResponse = describeAppVersionResourcesResolutionStatusResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public DescribeAppVersionResourcesResolutionStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeAppVersionResourcesResolutionStatusResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeAppVersionResourcesResolutionStatusResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DescribeAppVersionResourcesResolutionStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public DescribeAppVersionResourcesResolutionStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public DescribeAppVersionResourcesResolutionStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public DescribeAppVersionResourcesResolutionStatusResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
