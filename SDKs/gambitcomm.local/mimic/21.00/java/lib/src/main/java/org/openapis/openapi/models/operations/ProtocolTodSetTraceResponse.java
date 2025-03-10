/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ProtocolTodSetTraceResponse {
    
    public String contentType;

    public ProtocolTodSetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ProtocolTodSetTraceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ProtocolTodSetTraceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * successful operation
     */
    
    public String protocolTodSetTrace200ApplicationJSONString;

    public ProtocolTodSetTraceResponse withProtocolTodSetTrace200ApplicationJSONString(String protocolTodSetTrace200ApplicationJSONString) {
        this.protocolTodSetTrace200ApplicationJSONString = protocolTodSetTrace200ApplicationJSONString;
        return this;
    }
    
    public ProtocolTodSetTraceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
