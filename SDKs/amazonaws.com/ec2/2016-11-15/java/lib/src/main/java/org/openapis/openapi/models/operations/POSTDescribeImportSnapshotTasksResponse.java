/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class POSTDescribeImportSnapshotTasksResponse {
    
    public byte[] body;

    public POSTDescribeImportSnapshotTasksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public POSTDescribeImportSnapshotTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public POSTDescribeImportSnapshotTasksResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public POSTDescribeImportSnapshotTasksResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public POSTDescribeImportSnapshotTasksResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
