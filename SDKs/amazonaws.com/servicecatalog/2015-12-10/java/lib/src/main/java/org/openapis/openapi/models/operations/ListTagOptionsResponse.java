/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListTagOptionsResponse {
    
    public String contentType;

    public ListTagOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InvalidParametersException
     */
    
    public Object invalidParametersException;

    public ListTagOptionsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListTagOptionsOutput listTagOptionsOutput;

    public ListTagOptionsResponse withListTagOptionsOutput(org.openapis.openapi.models.shared.ListTagOptionsOutput listTagOptionsOutput) {
        this.listTagOptionsOutput = listTagOptionsOutput;
        return this;
    }
    
    
    public Integer statusCode;

    public ListTagOptionsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListTagOptionsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TagOptionNotMigratedException
     */
    
    public Object tagOptionNotMigratedException;

    public ListTagOptionsResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
    
    public ListTagOptionsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
