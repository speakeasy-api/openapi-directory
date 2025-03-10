/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListTagsForResourceResponse {
    
    public String contentType;

    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListTagsForResourceResponse listTagsForResourceResponse;

    public ListTagsForResourceResponse withListTagsForResourceResponse(org.openapis.openapi.models.shared.ListTagsForResourceResponse listTagsForResourceResponse) {
        this.listTagsForResourceResponse = listTagsForResourceResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListTagsForResourceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListTagsForResourceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListTagsForResourceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
