/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StartWorkspacesResponse {
    
    public String contentType;

    public StartWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.StartWorkspacesResult startWorkspacesResult;

    public StartWorkspacesResponse withStartWorkspacesResult(org.openapis.openapi.models.shared.StartWorkspacesResult startWorkspacesResult) {
        this.startWorkspacesResult = startWorkspacesResult;
        return this;
    }
    
    
    public Integer statusCode;

    public StartWorkspacesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StartWorkspacesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public StartWorkspacesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
