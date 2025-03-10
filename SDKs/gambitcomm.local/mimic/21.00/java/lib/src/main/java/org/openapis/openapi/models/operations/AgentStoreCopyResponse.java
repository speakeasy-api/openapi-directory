/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AgentStoreCopyResponse {
    
    public String contentType;

    public AgentStoreCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public AgentStoreCopyResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AgentStoreCopyResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * successful operation
     */
    
    public String agentStoreCopy200ApplicationJSONString;

    public AgentStoreCopyResponse withAgentStoreCopy200ApplicationJSONString(String agentStoreCopy200ApplicationJSONString) {
        this.agentStoreCopy200ApplicationJSONString = agentStoreCopy200ApplicationJSONString;
        return this;
    }
    
    public AgentStoreCopyResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
