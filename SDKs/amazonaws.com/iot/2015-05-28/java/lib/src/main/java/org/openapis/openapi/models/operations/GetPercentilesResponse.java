/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetPercentilesResponse {
    
    public String contentType;

    public GetPercentilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetPercentilesResponse getPercentilesResponse;

    public GetPercentilesResponse withGetPercentilesResponse(org.openapis.openapi.models.shared.GetPercentilesResponse getPercentilesResponse) {
        this.getPercentilesResponse = getPercentilesResponse;
        return this;
    }
    
    /**
     * IndexNotReadyException
     */
    
    public Object indexNotReadyException;

    public GetPercentilesResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    
    /**
     * InternalFailureException
     */
    
    public Object internalFailureException;

    public GetPercentilesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    
    /**
     * InvalidAggregationException
     */
    
    public Object invalidAggregationException;

    public GetPercentilesResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    
    /**
     * InvalidQueryException
     */
    
    public Object invalidQueryException;

    public GetPercentilesResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public GetPercentilesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetPercentilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ServiceUnavailableException
     */
    
    public Object serviceUnavailableException;

    public GetPercentilesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetPercentilesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetPercentilesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public GetPercentilesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * UnauthorizedException
     */
    
    public Object unauthorizedException;

    public GetPercentilesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    
    public GetPercentilesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
