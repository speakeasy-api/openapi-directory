/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TrapConfigDelRequest {
    /**
     * IP of the destination
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;

    public TrapConfigDelRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
    
    /**
     * Agent to delete the destination
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;

    public TrapConfigDelRequest withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    
    /**
     * port of the destination
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;

    public TrapConfigDelRequest withPort(Integer port) {
        this.port = port;
        return this;
    }
    
    public TrapConfigDelRequest(@JsonProperty("IP") String ip, @JsonProperty("agentNum") Integer agentNum, @JsonProperty("port") Integer port) {
        this.ip = ip;
        this.agentNum = agentNum;
        this.port = port;
  }
}
