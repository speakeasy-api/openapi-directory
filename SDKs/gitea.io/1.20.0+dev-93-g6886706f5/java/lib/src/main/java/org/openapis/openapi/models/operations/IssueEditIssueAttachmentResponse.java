/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class IssueEditIssueAttachmentResponse {
    /**
     * Attachment
     */
    
    public org.openapis.openapi.models.shared.Attachment attachment;
    public IssueEditIssueAttachmentResponse withAttachment(org.openapis.openapi.models.shared.Attachment attachment) {
        this.attachment = attachment;
        return this;
    }
    
    
    public byte[] body;
    public IssueEditIssueAttachmentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;
    public IssueEditIssueAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;
    public IssueEditIssueAttachmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;
    public IssueEditIssueAttachmentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public IssueEditIssueAttachmentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
