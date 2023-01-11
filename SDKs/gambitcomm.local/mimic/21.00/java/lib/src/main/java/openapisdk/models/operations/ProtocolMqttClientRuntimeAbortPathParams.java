package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientRuntimeAbortPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientRuntimeAbortPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}