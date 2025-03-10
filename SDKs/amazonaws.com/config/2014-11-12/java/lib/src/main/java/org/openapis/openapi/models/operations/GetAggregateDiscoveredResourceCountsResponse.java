/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetAggregateDiscoveredResourceCountsResponse {
    
    public String contentType;

    public GetAggregateDiscoveredResourceCountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetAggregateDiscoveredResourceCountsResponse getAggregateDiscoveredResourceCountsResponse;

    public GetAggregateDiscoveredResourceCountsResponse withGetAggregateDiscoveredResourceCountsResponse(org.openapis.openapi.models.shared.GetAggregateDiscoveredResourceCountsResponse getAggregateDiscoveredResourceCountsResponse) {
        this.getAggregateDiscoveredResourceCountsResponse = getAggregateDiscoveredResourceCountsResponse;
        return this;
    }
    
    /**
     * InvalidLimitException
     */
    
    public Object invalidLimitException;

    public GetAggregateDiscoveredResourceCountsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    
    /**
     * InvalidNextTokenException
     */
    
    public Object invalidNextTokenException;

    public GetAggregateDiscoveredResourceCountsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    
    /**
     * NoSuchConfigurationAggregatorException
     */
    
    public Object noSuchConfigurationAggregatorException;

    public GetAggregateDiscoveredResourceCountsResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetAggregateDiscoveredResourceCountsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetAggregateDiscoveredResourceCountsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetAggregateDiscoveredResourceCountsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetAggregateDiscoveredResourceCountsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
