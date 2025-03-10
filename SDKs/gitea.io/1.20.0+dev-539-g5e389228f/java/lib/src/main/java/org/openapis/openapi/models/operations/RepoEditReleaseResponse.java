/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RepoEditReleaseResponse {
    
    public byte[] body;

    public RepoEditReleaseResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public RepoEditReleaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Release
     */
    
    public org.openapis.openapi.models.shared.Release release;

    public RepoEditReleaseResponse withRelease(org.openapis.openapi.models.shared.Release release) {
        this.release = release;
        return this;
    }
    
    
    public Integer statusCode;

    public RepoEditReleaseResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RepoEditReleaseResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public RepoEditReleaseResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
