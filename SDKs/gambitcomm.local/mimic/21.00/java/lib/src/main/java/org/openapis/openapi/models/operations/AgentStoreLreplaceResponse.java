/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AgentStoreLreplaceResponse {
    
    public String contentType;

    public AgentStoreLreplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public AgentStoreLreplaceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AgentStoreLreplaceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * successful operation
     */
    
    public String agentStoreLreplace200ApplicationJSONString;

    public AgentStoreLreplaceResponse withAgentStoreLreplace200ApplicationJSONString(String agentStoreLreplace200ApplicationJSONString) {
        this.agentStoreLreplace200ApplicationJSONString = agentStoreLreplace200ApplicationJSONString;
        return this;
    }
    
    public AgentStoreLreplaceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
