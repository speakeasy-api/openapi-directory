package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolMqttClientSubscribeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolMqttClientSubscribeGetPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attr")
    public String attr;
    public ProtocolMqttClientSubscribeGetPathParams withAttr(String attr) {
        this.attr = attr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subNum")
    public Integer subNum;
    public ProtocolMqttClientSubscribeGetPathParams withSubNum(Integer subNum) {
        this.subNum = subNum;
        return this;
    }
}