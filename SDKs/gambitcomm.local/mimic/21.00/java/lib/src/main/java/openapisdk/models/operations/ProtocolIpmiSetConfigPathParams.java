package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolIpmiSetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolIpmiSetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=argument")
    public String argument;
    public ProtocolIpmiSetConfigPathParams withArgument(String argument) {
        this.argument = argument;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;
    public ProtocolIpmiSetConfigPathParams withValue(String value) {
        this.value = value;
        return this;
    }
}