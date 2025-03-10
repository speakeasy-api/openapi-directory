/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ImportationMapCustomColumnResponse {
    /**
     * Occurs when a user tries to work on the wrong store.
     * Occurs when the message concerns the wrong execution.
     * Occurs when a catalog column is not found.
     */
    
    public org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage;

    public ImportationMapCustomColumnResponse withBeezUPCommonErrorResponseMessage(org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    
    
    public String contentType;

    public ImportationMapCustomColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ImportationMapCustomColumnResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ImportationMapCustomColumnResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ImportationMapCustomColumnResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
