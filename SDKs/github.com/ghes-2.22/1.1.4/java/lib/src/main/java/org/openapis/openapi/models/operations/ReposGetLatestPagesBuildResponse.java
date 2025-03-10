/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposGetLatestPagesBuildResponse {
    
    public String contentType;

    public ReposGetLatestPagesBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposGetLatestPagesBuildResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposGetLatestPagesBuildResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.PageBuild pageBuild;

    public ReposGetLatestPagesBuildResponse withPageBuild(org.openapis.openapi.models.shared.PageBuild pageBuild) {
        this.pageBuild = pageBuild;
        return this;
    }
    
    public ReposGetLatestPagesBuildResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
