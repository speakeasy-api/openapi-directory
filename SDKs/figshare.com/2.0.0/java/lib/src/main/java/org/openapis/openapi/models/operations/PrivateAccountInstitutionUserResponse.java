/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PrivateAccountInstitutionUserResponse {
    
    public String contentType;

    public PrivateAccountInstitutionUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Forbidden
     */
    
    public org.openapis.openapi.models.shared.ErrorMessage errorMessage;

    public PrivateAccountInstitutionUserResponse withErrorMessage(org.openapis.openapi.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    
    public Integer statusCode;

    public PrivateAccountInstitutionUserResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PrivateAccountInstitutionUserResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK. User representation
     */
    
    public org.openapis.openapi.models.shared.User user;

    public PrivateAccountInstitutionUserResponse withUser(org.openapis.openapi.models.shared.User user) {
        this.user = user;
        return this;
    }
    
    public PrivateAccountInstitutionUserResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
