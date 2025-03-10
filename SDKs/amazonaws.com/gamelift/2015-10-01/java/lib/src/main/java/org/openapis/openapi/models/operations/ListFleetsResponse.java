/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListFleetsResponse {
    
    public String contentType;

    public ListFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServiceException
     */
    
    public Object internalServiceException;

    public ListFleetsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public ListFleetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListFleetsOutput listFleetsOutput;

    public ListFleetsResponse withListFleetsOutput(org.openapis.openapi.models.shared.ListFleetsOutput listFleetsOutput) {
        this.listFleetsOutput = listFleetsOutput;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public ListFleetsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public ListFleetsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListFleetsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * UnauthorizedException
     */
    
    public Object unauthorizedException;

    public ListFleetsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    
    public ListFleetsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
