/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AutoConfigureAutoImportIntervalResponse {
    /**
     * When the min catalog Auto Import scheduling interval delay has been reached.
     * When the max catalog Auto Import count has been reached.
     */
    
    public org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage;

    public AutoConfigureAutoImportIntervalResponse withBeezUPCommonErrorResponseMessage(org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    
    
    public String contentType;

    public AutoConfigureAutoImportIntervalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public AutoConfigureAutoImportIntervalResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AutoConfigureAutoImportIntervalResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AutoConfigureAutoImportIntervalResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
