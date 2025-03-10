/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SearchVersionsResponse {
    
    public String contentType;

    public SearchVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Common response for all operations that can return a `404` error.
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public SearchVersionsResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public SearchVersionsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SearchVersionsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * On a successful response, returns a result set of versions - one for each version
     * of the artifact.
     */
    
    public org.openapis.openapi.models.shared.VersionSearchResults versionSearchResults;

    public SearchVersionsResponse withVersionSearchResults(org.openapis.openapi.models.shared.VersionSearchResults versionSearchResults) {
        this.versionSearchResults = versionSearchResults;
        return this;
    }
    
    public SearchVersionsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
