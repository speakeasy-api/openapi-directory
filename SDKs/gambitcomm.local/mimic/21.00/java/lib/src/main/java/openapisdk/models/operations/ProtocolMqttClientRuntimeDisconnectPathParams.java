package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientRuntimeDisconnectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientRuntimeDisconnectPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}