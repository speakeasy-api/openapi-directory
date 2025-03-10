/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetStatisticsResponse {
    
    public String contentType;

    public GetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetStatisticsResponse getStatisticsResponse;

    public GetStatisticsResponse withGetStatisticsResponse(org.openapis.openapi.models.shared.GetStatisticsResponse getStatisticsResponse) {
        this.getStatisticsResponse = getStatisticsResponse;
        return this;
    }
    
    /**
     * IndexNotReadyException
     */
    
    public Object indexNotReadyException;

    public GetStatisticsResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    
    /**
     * InternalFailureException
     */
    
    public Object internalFailureException;

    public GetStatisticsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    
    /**
     * InvalidAggregationException
     */
    
    public Object invalidAggregationException;

    public GetStatisticsResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    
    /**
     * InvalidQueryException
     */
    
    public Object invalidQueryException;

    public GetStatisticsResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public GetStatisticsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetStatisticsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ServiceUnavailableException
     */
    
    public Object serviceUnavailableException;

    public GetStatisticsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetStatisticsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetStatisticsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public GetStatisticsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * UnauthorizedException
     */
    
    public Object unauthorizedException;

    public GetStatisticsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    
    public GetStatisticsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
