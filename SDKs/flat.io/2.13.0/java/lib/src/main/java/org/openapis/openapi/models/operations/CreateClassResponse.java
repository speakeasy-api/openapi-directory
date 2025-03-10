/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateClassResponse {
    /**
     * The new class details
     */
    
    public org.openapis.openapi.models.shared.ClassDetails classDetails;

    public CreateClassResponse withClassDetails(org.openapis.openapi.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    
    
    public String contentType;

    public CreateClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Account overquota
     */
    
    public org.openapis.openapi.models.shared.FlatErrorResponse flatErrorResponse;

    public CreateClassResponse withFlatErrorResponse(org.openapis.openapi.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateClassResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateClassResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CreateClassResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
