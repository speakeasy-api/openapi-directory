/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetTeacherResponse {
    
    public String contentType;

    public GetTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Entity Not Found
     */
    
    public org.openapis.openapi.models.shared.NotFound notFound;

    public GetTeacherResponse withNotFound(org.openapis.openapi.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    
    
    public Integer statusCode;

    public GetTeacherResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetTeacherResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK Response
     */
    
    public org.openapis.openapi.models.shared.TeacherResponse teacherResponse;

    public GetTeacherResponse withTeacherResponse(org.openapis.openapi.models.shared.TeacherResponse teacherResponse) {
        this.teacherResponse = teacherResponse;
        return this;
    }
    
    public GetTeacherResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
