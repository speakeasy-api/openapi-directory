/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse {
    
    public String contentType;

    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * If the authenticated user is not the author of the comment.
     */
    
    public java.util.Map<String, Object> error;

    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    
    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
