/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TeamsCreateResponse {
    
    public String contentType;

    public TeamsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public TeamsCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TeamsCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Forbidden
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public TeamsCreateResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.TeamFull teamFull;

    public TeamsCreateResponse withTeamFull(org.openapis.openapi.models.shared.TeamFull teamFull) {
        this.teamFull = teamFull;
        return this;
    }
    
    /**
     * Validation failed
     */
    
    public org.openapis.openapi.models.shared.ValidationError validationError;

    public TeamsCreateResponse withValidationError(org.openapis.openapi.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
    
    public TeamsCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
