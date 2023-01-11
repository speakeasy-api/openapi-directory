package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSetKeepalivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSetKeepalivePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aliveTime")
    public Integer aliveTime;
    public ProtocolMqttClientSetKeepalivePathParams withAliveTime(Integer aliveTime) {
        this.aliveTime = aliveTime;
        return this;
    }
}