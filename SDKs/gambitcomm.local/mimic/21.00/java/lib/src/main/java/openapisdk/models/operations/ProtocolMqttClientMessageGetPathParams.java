package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientMessageGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientMessageGetPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attr")
    public String attr;
    public ProtocolMqttClientMessageGetPathParams withAttr(String attr) {
        this.attr = attr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=msgNum")
    public Integer msgNum;
    public ProtocolMqttClientMessageGetPathParams withMsgNum(Integer msgNum) {
        this.msgNum = msgNum;
        return this;
    }
}