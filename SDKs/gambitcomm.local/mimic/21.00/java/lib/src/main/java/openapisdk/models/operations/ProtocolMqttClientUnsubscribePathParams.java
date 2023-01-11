package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientUnsubscribePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientUnsubscribePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subNum")
    public Integer subNum;
    public ProtocolMqttClientUnsubscribePathParams withSubNum(Integer subNum) {
        this.subNum = subNum;
        return this;
    }
}