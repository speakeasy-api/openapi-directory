/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposCreatePagesSiteResponse {
    
    public String contentType;

    public ReposCreatePagesSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposCreatePagesSiteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposCreatePagesSiteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Conflict
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public ReposCreatePagesSiteResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.Page page;

    public ReposCreatePagesSiteResponse withPage(org.openapis.openapi.models.shared.Page page) {
        this.page = page;
        return this;
    }
    
    /**
     * Validation failed
     */
    
    public org.openapis.openapi.models.shared.ValidationError validationError;

    public ReposCreatePagesSiteResponse withValidationError(org.openapis.openapi.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
    
    public ReposCreatePagesSiteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
