/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DescribeExportConfigurationsResponse {
    /**
     * AuthorizationErrorException
     */
    
    public Object authorizationErrorException;

    public DescribeExportConfigurationsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    
    
    public String contentType;

    public DescribeExportConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.DescribeExportConfigurationsResponse describeExportConfigurationsResponse;

    public DescribeExportConfigurationsResponse withDescribeExportConfigurationsResponse(org.openapis.openapi.models.shared.DescribeExportConfigurationsResponse describeExportConfigurationsResponse) {
        this.describeExportConfigurationsResponse = describeExportConfigurationsResponse;
        return this;
    }
    
    /**
     * HomeRegionNotSetException
     */
    
    public Object homeRegionNotSetException;

    public DescribeExportConfigurationsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public DescribeExportConfigurationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * InvalidParameterValueException
     */
    
    public Object invalidParameterValueException;

    public DescribeExportConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    
    
    public Integer statusCode;

    public DescribeExportConfigurationsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DescribeExportConfigurationsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public DescribeExportConfigurationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * ServerInternalErrorException
     */
    
    public Object serverInternalErrorException;

    public DescribeExportConfigurationsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    
    public DescribeExportConfigurationsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
