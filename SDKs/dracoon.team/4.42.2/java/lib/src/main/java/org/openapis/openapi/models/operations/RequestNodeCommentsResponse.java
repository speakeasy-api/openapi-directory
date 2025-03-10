/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class RequestNodeCommentsResponse {
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.CommentList commentList;
    public RequestNodeCommentsResponse withCommentList(org.openapis.openapi.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    
    
    public String contentType;
    public RequestNodeCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;
    public RequestNodeCommentsResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public RequestNodeCommentsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public RequestNodeCommentsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
