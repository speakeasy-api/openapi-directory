/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProtocolMqttClientMessageSetRequest {
    /**
     * Agent to show MQTT state
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;

    public ProtocolMqttClientMessageSetRequest withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    
    /**
     * Attribute
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attr")
    public String attr;

    public ProtocolMqttClientMessageSetRequest withAttr(String attr) {
        this.attr = attr;
        return this;
    }
    
    /**
     * Message Number
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=msgNum")
    public Integer msgNum;

    public ProtocolMqttClientMessageSetRequest withMsgNum(Integer msgNum) {
        this.msgNum = msgNum;
        return this;
    }
    
    /**
     * Value
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;

    public ProtocolMqttClientMessageSetRequest withValue(String value) {
        this.value = value;
        return this;
    }
    
    public ProtocolMqttClientMessageSetRequest(@JsonProperty("agentNum") Integer agentNum, @JsonProperty("attr") String attr, @JsonProperty("msgNum") Integer msgNum, @JsonProperty("value") String value) {
        this.agentNum = agentNum;
        this.attr = attr;
        this.msgNum = msgNum;
        this.value = value;
  }
}
