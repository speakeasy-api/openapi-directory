/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReserveContactResponse {
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ContactIdResponse contactIdResponse;

    public ReserveContactResponse withContactIdResponse(org.openapis.openapi.models.shared.ContactIdResponse contactIdResponse) {
        this.contactIdResponse = contactIdResponse;
        return this;
    }
    
    
    public String contentType;

    public ReserveContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * DependencyException
     */
    
    public Object dependencyException;

    public ReserveContactResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public ReserveContactResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    
    public Integer statusCode;

    public ReserveContactResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReserveContactResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public ReserveContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    public ReserveContactResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
