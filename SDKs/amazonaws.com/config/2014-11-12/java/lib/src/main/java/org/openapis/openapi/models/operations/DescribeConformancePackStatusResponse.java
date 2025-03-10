/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeConformancePackStatusResponse {
    
    public String contentType;

    public DescribeConformancePackStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeConformancePackStatusResponse describeConformancePackStatusResponse;

    public DescribeConformancePackStatusResponse withDescribeConformancePackStatusResponse(org.openapis.openapi.models.shared.DescribeConformancePackStatusResponse describeConformancePackStatusResponse) {
        this.describeConformancePackStatusResponse = describeConformancePackStatusResponse;
        return this;
    }
    
    /**
     * InvalidLimitException
     */
    
    public Object invalidLimitException;

    public DescribeConformancePackStatusResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    
    /**
     * InvalidNextTokenException
     */
    
    public Object invalidNextTokenException;

    public DescribeConformancePackStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    
    /**
     * InvalidParameterValueException
     */
    
    public Object invalidParameterValueException;

    public DescribeConformancePackStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeConformancePackStatusResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeConformancePackStatusResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DescribeConformancePackStatusResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
