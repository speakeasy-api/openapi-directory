/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListAnomalyGroupTimeSeriesResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public ListAnomalyGroupTimeSeriesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public ListAnomalyGroupTimeSeriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public ListAnomalyGroupTimeSeriesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListAnomalyGroupTimeSeriesResponse listAnomalyGroupTimeSeriesResponse;

    public ListAnomalyGroupTimeSeriesResponse withListAnomalyGroupTimeSeriesResponse(org.openapis.openapi.models.shared.ListAnomalyGroupTimeSeriesResponse listAnomalyGroupTimeSeriesResponse) {
        this.listAnomalyGroupTimeSeriesResponse = listAnomalyGroupTimeSeriesResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListAnomalyGroupTimeSeriesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListAnomalyGroupTimeSeriesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public ListAnomalyGroupTimeSeriesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public ListAnomalyGroupTimeSeriesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public ListAnomalyGroupTimeSeriesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public ListAnomalyGroupTimeSeriesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
