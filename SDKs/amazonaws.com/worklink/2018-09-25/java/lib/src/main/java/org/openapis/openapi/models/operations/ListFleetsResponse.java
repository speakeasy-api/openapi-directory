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
     * InternalServerErrorException
     */
    
    public Object internalServerErrorException;

    public ListFleetsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
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
    
    public org.openapis.openapi.models.shared.ListFleetsResponse listFleetsResponse;

    public ListFleetsResponse withListFleetsResponse(org.openapis.openapi.models.shared.ListFleetsResponse listFleetsResponse) {
        this.listFleetsResponse = listFleetsResponse;
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
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public ListFleetsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
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
