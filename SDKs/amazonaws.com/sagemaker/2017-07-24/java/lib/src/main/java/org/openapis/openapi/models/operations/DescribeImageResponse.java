/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeImageResponse {
    
    public String contentType;

    public DescribeImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeImageResponse describeImageResponse;

    public DescribeImageResponse withDescribeImageResponse(org.openapis.openapi.models.shared.DescribeImageResponse describeImageResponse) {
        this.describeImageResponse = describeImageResponse;
        return this;
    }
    
    /**
     * ResourceNotFound
     */
    
    public Object resourceNotFound;

    public DescribeImageResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeImageResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeImageResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DescribeImageResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
