/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateUserPoolDomainResponse {
    
    public String contentType;

    public CreateUserPoolDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateUserPoolDomainResponse createUserPoolDomainResponse;

    public CreateUserPoolDomainResponse withCreateUserPoolDomainResponse(org.openapis.openapi.models.shared.CreateUserPoolDomainResponse createUserPoolDomainResponse) {
        this.createUserPoolDomainResponse = createUserPoolDomainResponse;
        return this;
    }
    
    /**
     * InternalErrorException
     */
    
    public Object internalErrorException;

    public CreateUserPoolDomainResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public CreateUserPoolDomainResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * LimitExceededException
     */
    
    public Object limitExceededException;

    public CreateUserPoolDomainResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    
    /**
     * NotAuthorizedException
     */
    
    public Object notAuthorizedException;

    public CreateUserPoolDomainResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateUserPoolDomainResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateUserPoolDomainResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public CreateUserPoolDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    public CreateUserPoolDomainResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
