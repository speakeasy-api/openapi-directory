/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ProtocolMqttClientMessageGetResponse {
    
    public String contentType;

    public ProtocolMqttClientMessageGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ProtocolMqttClientMessageGetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ProtocolMqttClientMessageGetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * successful operation
     */
    
    public String[] protocolMqttClientMessageGet200ApplicationJSONStrings;

    public ProtocolMqttClientMessageGetResponse withProtocolMqttClientMessageGet200ApplicationJSONStrings(String[] protocolMqttClientMessageGet200ApplicationJSONStrings) {
        this.protocolMqttClientMessageGet200ApplicationJSONStrings = protocolMqttClientMessageGet200ApplicationJSONStrings;
        return this;
    }
    
    public ProtocolMqttClientMessageGetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
