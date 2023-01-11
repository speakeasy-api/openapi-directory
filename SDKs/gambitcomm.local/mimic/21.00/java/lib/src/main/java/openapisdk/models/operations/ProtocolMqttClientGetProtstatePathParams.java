package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientGetProtstatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientGetProtstatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}