/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListListenersResponse {
    /**
     * AcceleratorNotFoundException
     */
    
    public Object acceleratorNotFoundException;

    public ListListenersResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    
    
    public String contentType;

    public ListListenersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServiceErrorException
     */
    
    public Object internalServiceErrorException;

    public ListListenersResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    
    /**
     * InvalidArgumentException
     */
    
    public Object invalidArgumentException;

    public ListListenersResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    
    /**
     * InvalidNextTokenException
     */
    
    public Object invalidNextTokenException;

    public ListListenersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListListenersResponse listListenersResponse;

    public ListListenersResponse withListListenersResponse(org.openapis.openapi.models.shared.ListListenersResponse listListenersResponse) {
        this.listListenersResponse = listListenersResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListListenersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListListenersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListListenersResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
