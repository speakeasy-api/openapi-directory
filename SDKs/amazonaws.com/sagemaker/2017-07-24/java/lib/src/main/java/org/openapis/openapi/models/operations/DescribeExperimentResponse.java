/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeExperimentResponse {
    
    public String contentType;

    public DescribeExperimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeExperimentResponse describeExperimentResponse;

    public DescribeExperimentResponse withDescribeExperimentResponse(org.openapis.openapi.models.shared.DescribeExperimentResponse describeExperimentResponse) {
        this.describeExperimentResponse = describeExperimentResponse;
        return this;
    }
    
    /**
     * ResourceNotFound
     */
    
    public Object resourceNotFound;

    public DescribeExperimentResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeExperimentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeExperimentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DescribeExperimentResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
