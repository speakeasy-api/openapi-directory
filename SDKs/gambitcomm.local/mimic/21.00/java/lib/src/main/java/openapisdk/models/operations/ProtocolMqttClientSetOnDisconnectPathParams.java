package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSetOnDisconnectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action")
    public String action;
    public ProtocolMqttClientSetOnDisconnectPathParams withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSetOnDisconnectPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}