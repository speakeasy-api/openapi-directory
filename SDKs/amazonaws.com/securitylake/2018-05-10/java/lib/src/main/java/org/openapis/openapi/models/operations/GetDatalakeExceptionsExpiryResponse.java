/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetDatalakeExceptionsExpiryResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public GetDatalakeExceptionsExpiryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * AccountNotFoundException
     */
    
    public Object accountNotFoundException;

    public GetDatalakeExceptionsExpiryResponse withAccountNotFoundException(Object accountNotFoundException) {
        this.accountNotFoundException = accountNotFoundException;
        return this;
    }
    
    
    public String contentType;

    public GetDatalakeExceptionsExpiryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetDatalakeExceptionsExpiryResponse getDatalakeExceptionsExpiryResponse;

    public GetDatalakeExceptionsExpiryResponse withGetDatalakeExceptionsExpiryResponse(org.openapis.openapi.models.shared.GetDatalakeExceptionsExpiryResponse getDatalakeExceptionsExpiryResponse) {
        this.getDatalakeExceptionsExpiryResponse = getDatalakeExceptionsExpiryResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public GetDatalakeExceptionsExpiryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetDatalakeExceptionsExpiryResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetDatalakeExceptionsExpiryResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetDatalakeExceptionsExpiryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetDatalakeExceptionsExpiryResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
