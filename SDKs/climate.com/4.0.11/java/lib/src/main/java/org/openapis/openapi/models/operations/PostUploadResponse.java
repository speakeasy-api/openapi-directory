/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostUploadResponse {
    
    public String contentType;

    public PostUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Returns a new upload with ID used to PUT file contents.
     */
    
    public String createdUpload;

    public PostUploadResponse withCreatedUpload(String createdUpload) {
        this.createdUpload = createdUpload;
        return this;
    }
    
    /**
     * Bad Input
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public PostUploadResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public PostUploadResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public PostUploadResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostUploadResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostUploadResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
