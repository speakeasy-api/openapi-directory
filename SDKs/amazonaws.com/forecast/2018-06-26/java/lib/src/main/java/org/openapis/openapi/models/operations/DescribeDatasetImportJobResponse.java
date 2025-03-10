/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeDatasetImportJobResponse {
    
    public String contentType;

    public DescribeDatasetImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeDatasetImportJobResponse describeDatasetImportJobResponse;

    public DescribeDatasetImportJobResponse withDescribeDatasetImportJobResponse(org.openapis.openapi.models.shared.DescribeDatasetImportJobResponse describeDatasetImportJobResponse) {
        this.describeDatasetImportJobResponse = describeDatasetImportJobResponse;
        return this;
    }
    
    /**
     * InvalidInputException
     */
    
    public Object invalidInputException;

    public DescribeDatasetImportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeDatasetImportJobResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeDatasetImportJobResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DescribeDatasetImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    public DescribeDatasetImportJobResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
