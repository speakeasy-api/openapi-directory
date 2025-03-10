/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListStreamProcessorsResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public ListStreamProcessorsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public ListStreamProcessorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerError
     */
    
    public Object internalServerError;

    public ListStreamProcessorsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    
    /**
     * InvalidPaginationTokenException
     */
    
    public Object invalidPaginationTokenException;

    public ListStreamProcessorsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public ListStreamProcessorsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListStreamProcessorsResponse listStreamProcessorsResponse;

    public ListStreamProcessorsResponse withListStreamProcessorsResponse(org.openapis.openapi.models.shared.ListStreamProcessorsResponse listStreamProcessorsResponse) {
        this.listStreamProcessorsResponse = listStreamProcessorsResponse;
        return this;
    }
    
    /**
     * ProvisionedThroughputExceededException
     */
    
    public Object provisionedThroughputExceededException;

    public ListStreamProcessorsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    
    
    public Integer statusCode;

    public ListStreamProcessorsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListStreamProcessorsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public ListStreamProcessorsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    public ListStreamProcessorsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
