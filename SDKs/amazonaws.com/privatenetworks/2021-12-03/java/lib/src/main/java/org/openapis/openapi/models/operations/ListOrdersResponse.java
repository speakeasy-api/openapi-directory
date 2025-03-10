/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListOrdersResponse {
    
    public String contentType;

    public ListOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public ListOrdersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListOrdersResponse listOrdersResponse;

    public ListOrdersResponse withListOrdersResponse(org.openapis.openapi.models.shared.ListOrdersResponse listOrdersResponse) {
        this.listOrdersResponse = listOrdersResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public ListOrdersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public ListOrdersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListOrdersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public ListOrdersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public ListOrdersResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
