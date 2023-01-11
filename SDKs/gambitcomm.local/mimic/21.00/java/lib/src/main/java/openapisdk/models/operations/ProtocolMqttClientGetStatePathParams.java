package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientGetStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientGetStatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}