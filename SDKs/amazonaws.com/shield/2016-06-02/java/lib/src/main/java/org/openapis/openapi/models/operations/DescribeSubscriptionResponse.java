/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeSubscriptionResponse {
    
    public String contentType;

    public DescribeSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeSubscriptionResponse describeSubscriptionResponse;

    public DescribeSubscriptionResponse withDescribeSubscriptionResponse(org.openapis.openapi.models.shared.DescribeSubscriptionResponse describeSubscriptionResponse) {
        this.describeSubscriptionResponse = describeSubscriptionResponse;
        return this;
    }
    
    /**
     * InternalErrorException
     */
    
    public Object internalErrorException;

    public DescribeSubscriptionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeSubscriptionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeSubscriptionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DescribeSubscriptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    public DescribeSubscriptionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
