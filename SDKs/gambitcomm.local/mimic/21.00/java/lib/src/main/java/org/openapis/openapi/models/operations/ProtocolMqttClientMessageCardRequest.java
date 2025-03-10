/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProtocolMqttClientMessageCardRequest {
    /**
     * Agent to show MQTT message state
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;

    public ProtocolMqttClientMessageCardRequest withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    
    public ProtocolMqttClientMessageCardRequest(@JsonProperty("agentNum") Integer agentNum) {
        this.agentNum = agentNum;
  }
}
