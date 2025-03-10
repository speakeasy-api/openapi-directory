/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class OrgsListMembershipsForAuthenticatedUserResponse {
    
    public String contentType;

    public OrgsListMembershipsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public OrgsListMembershipsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public OrgsListMembershipsForAuthenticatedUserResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public OrgsListMembershipsForAuthenticatedUserResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Requires authentication
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public OrgsListMembershipsForAuthenticatedUserResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.OrgMembership[] orgMemberships;

    public OrgsListMembershipsForAuthenticatedUserResponse withOrgMemberships(org.openapis.openapi.models.shared.OrgMembership[] orgMemberships) {
        this.orgMemberships = orgMemberships;
        return this;
    }
    
    /**
     * Validation failed
     */
    
    public org.openapis.openapi.models.shared.ValidationError validationError;

    public OrgsListMembershipsForAuthenticatedUserResponse withValidationError(org.openapis.openapi.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
    
    public OrgsListMembershipsForAuthenticatedUserResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
