package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientMessageSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientMessageSetPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attr")
    public String attr;
    public ProtocolMqttClientMessageSetPathParams withAttr(String attr) {
        this.attr = attr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=msgNum")
    public Integer msgNum;
    public ProtocolMqttClientMessageSetPathParams withMsgNum(Integer msgNum) {
        this.msgNum = msgNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;
    public ProtocolMqttClientMessageSetPathParams withValue(String value) {
        this.value = value;
        return this;
    }
}