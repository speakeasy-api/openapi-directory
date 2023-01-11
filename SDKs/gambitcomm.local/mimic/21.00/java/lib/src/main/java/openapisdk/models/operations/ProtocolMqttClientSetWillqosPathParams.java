package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSetWillqosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSetWillqosPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=qos")
    public String qos;
    public ProtocolMqttClientSetWillqosPathParams withQos(String qos) {
        this.qos = qos;
        return this;
    }
}