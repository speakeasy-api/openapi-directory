package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSubscribeCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSubscribeCardPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}