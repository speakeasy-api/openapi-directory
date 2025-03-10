/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RepoListPullRequestsResponse {
    
    public byte[] body;

    public RepoListPullRequestsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public RepoListPullRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * PullRequestList
     */
    
    public org.openapis.openapi.models.shared.PullRequest[] pullRequests;

    public RepoListPullRequestsResponse withPullRequests(org.openapis.openapi.models.shared.PullRequest[] pullRequests) {
        this.pullRequests = pullRequests;
        return this;
    }
    
    
    public Integer statusCode;

    public RepoListPullRequestsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RepoListPullRequestsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public RepoListPullRequestsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
