/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateFeatureMetadataResponse {
    
    public String contentType;

    public UpdateFeatureMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ResourceNotFound
     */
    
    public Object resourceNotFound;

    public UpdateFeatureMetadataResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateFeatureMetadataResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateFeatureMetadataResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public UpdateFeatureMetadataResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
