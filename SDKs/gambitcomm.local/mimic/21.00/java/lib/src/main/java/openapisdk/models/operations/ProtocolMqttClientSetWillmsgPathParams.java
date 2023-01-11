package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSetWillmsgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSetWillmsgPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=msg")
    public String msg;
    public ProtocolMqttClientSetWillmsgPathParams withMsg(String msg) {
        this.msg = msg;
        return this;
    }
}