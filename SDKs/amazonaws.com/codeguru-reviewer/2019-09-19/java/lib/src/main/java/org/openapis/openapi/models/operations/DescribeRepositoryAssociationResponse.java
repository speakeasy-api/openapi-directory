/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeRepositoryAssociationResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public DescribeRepositoryAssociationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public DescribeRepositoryAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeRepositoryAssociationResponse describeRepositoryAssociationResponse;

    public DescribeRepositoryAssociationResponse withDescribeRepositoryAssociationResponse(org.openapis.openapi.models.shared.DescribeRepositoryAssociationResponse describeRepositoryAssociationResponse) {
        this.describeRepositoryAssociationResponse = describeRepositoryAssociationResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public DescribeRepositoryAssociationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public DescribeRepositoryAssociationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeRepositoryAssociationResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeRepositoryAssociationResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public DescribeRepositoryAssociationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public DescribeRepositoryAssociationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public DescribeRepositoryAssociationResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
