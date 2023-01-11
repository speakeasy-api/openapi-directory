package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSetCleansessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSetCleansessionPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cleanOrNot")
    public Integer cleanOrNot;
    public ProtocolMqttClientSetCleansessionPathParams withCleanOrNot(Integer cleanOrNot) {
        this.cleanOrNot = cleanOrNot;
        return this;
    }
}