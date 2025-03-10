/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AssociateHealthCheckResponse {
    /**
     * Success
     */
    
    public java.util.Map<String, Object> associateHealthCheckResponse;

    public AssociateHealthCheckResponse withAssociateHealthCheckResponse(java.util.Map<String, Object> associateHealthCheckResponse) {
        this.associateHealthCheckResponse = associateHealthCheckResponse;
        return this;
    }
    
    
    public String contentType;

    public AssociateHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalErrorException
     */
    
    public Object internalErrorException;

    public AssociateHealthCheckResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public AssociateHealthCheckResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * InvalidResourceException
     */
    
    public Object invalidResourceException;

    public AssociateHealthCheckResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    
    /**
     * LimitsExceededException
     */
    
    public Object limitsExceededException;

    public AssociateHealthCheckResponse withLimitsExceededException(Object limitsExceededException) {
        this.limitsExceededException = limitsExceededException;
        return this;
    }
    
    /**
     * OptimisticLockException
     */
    
    public Object optimisticLockException;

    public AssociateHealthCheckResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    
    
    public Integer statusCode;

    public AssociateHealthCheckResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AssociateHealthCheckResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public AssociateHealthCheckResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    public AssociateHealthCheckResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
