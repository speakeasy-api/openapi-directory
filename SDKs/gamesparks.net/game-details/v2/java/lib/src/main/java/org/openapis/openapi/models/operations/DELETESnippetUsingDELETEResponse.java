/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DELETESnippetUsingDELETEResponse {
    
    public String contentType;

    public DELETESnippetUsingDELETEResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ManageResult manageResult;

    public DELETESnippetUsingDELETEResponse withManageResult(org.openapis.openapi.models.shared.ManageResult manageResult) {
        this.manageResult = manageResult;
        return this;
    }
    
    /**
     * json error
     */
    
    public org.openapis.openapi.models.shared.MessageModel messageModel;

    public DELETESnippetUsingDELETEResponse withMessageModel(org.openapis.openapi.models.shared.MessageModel messageModel) {
        this.messageModel = messageModel;
        return this;
    }
    
    
    public Integer statusCode;

    public DELETESnippetUsingDELETEResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DELETESnippetUsingDELETEResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DELETESnippetUsingDELETEResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
