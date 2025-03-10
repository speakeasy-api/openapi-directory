/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetAddonLinkersLinkerKeyValuesValueIdResponse {
    
    public String contentType;

    public GetAddonLinkersLinkerKeyValuesValueIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetAddonLinkersLinkerKeyValuesValueIdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetAddonLinkersLinkerKeyValuesValueIdResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Authentication must use app JWT
     */
    
    public java.util.Map<String, Object> error;

    public GetAddonLinkersLinkerKeyValuesValueIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    
    public GetAddonLinkersLinkerKeyValuesValueIdResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
