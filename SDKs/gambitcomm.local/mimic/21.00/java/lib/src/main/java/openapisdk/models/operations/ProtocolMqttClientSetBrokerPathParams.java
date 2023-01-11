package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSetBrokerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSetBrokerPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=brokerAddr")
    public String brokerAddr;
    public ProtocolMqttClientSetBrokerPathParams withBrokerAddr(String brokerAddr) {
        this.brokerAddr = brokerAddr;
        return this;
    }
}