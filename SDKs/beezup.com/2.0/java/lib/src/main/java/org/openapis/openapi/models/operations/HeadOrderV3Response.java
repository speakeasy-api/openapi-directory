/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class HeadOrderV3Response {
    /**
     * Occurs when something goes wrong
     */
    
    public org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage;

    public HeadOrderV3Response withBeezUPCommonErrorResponseMessage(org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    
    
    public String contentType;

    public HeadOrderV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public HeadOrderV3Response withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public HeadOrderV3Response withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public HeadOrderV3Response withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Requested Order could not be found
     */
    
    public org.openapis.openapi.models.shared.ErrorResponseMessage errorResponseMessage;

    public HeadOrderV3Response withErrorResponseMessage(org.openapis.openapi.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    
    public HeadOrderV3Response(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
