package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientRuntimeConnectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientRuntimeConnectPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}