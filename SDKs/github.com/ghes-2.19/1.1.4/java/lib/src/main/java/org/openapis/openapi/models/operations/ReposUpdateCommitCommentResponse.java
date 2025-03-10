/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposUpdateCommitCommentResponse {
    
    public String contentType;

    public ReposUpdateCommitCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposUpdateCommitCommentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposUpdateCommitCommentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Resource not found
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public ReposUpdateCommitCommentResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.CommitComment commitComment;

    public ReposUpdateCommitCommentResponse withCommitComment(org.openapis.openapi.models.shared.CommitComment commitComment) {
        this.commitComment = commitComment;
        return this;
    }
    
    public ReposUpdateCommitCommentResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
