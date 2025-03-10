/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListOrganizationAdminAccountsResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public ListOrganizationAdminAccountsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public ListOrganizationAdminAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public ListOrganizationAdminAccountsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListOrganizationAdminAccountsResponse listOrganizationAdminAccountsResponse;

    public ListOrganizationAdminAccountsResponse withListOrganizationAdminAccountsResponse(org.openapis.openapi.models.shared.ListOrganizationAdminAccountsResponse listOrganizationAdminAccountsResponse) {
        this.listOrganizationAdminAccountsResponse = listOrganizationAdminAccountsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListOrganizationAdminAccountsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListOrganizationAdminAccountsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public ListOrganizationAdminAccountsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public ListOrganizationAdminAccountsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public ListOrganizationAdminAccountsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
