/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeSourceServersResponse {
    
    public String contentType;

    public DescribeSourceServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeSourceServersResponse describeSourceServersResponse;

    public DescribeSourceServersResponse withDescribeSourceServersResponse(org.openapis.openapi.models.shared.DescribeSourceServersResponse describeSourceServersResponse) {
        this.describeSourceServersResponse = describeSourceServersResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public DescribeSourceServersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeSourceServersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeSourceServersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public DescribeSourceServersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * UninitializedAccountException
     */
    
    public Object uninitializedAccountException;

    public DescribeSourceServersResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public DescribeSourceServersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public DescribeSourceServersResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
