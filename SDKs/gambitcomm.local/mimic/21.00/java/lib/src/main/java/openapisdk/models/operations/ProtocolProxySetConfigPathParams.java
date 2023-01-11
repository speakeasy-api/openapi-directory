package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolProxySetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolProxySetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=argument")
    public String argument;
    public ProtocolProxySetConfigPathParams withArgument(String argument) {
        this.argument = argument;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;
    public ProtocolProxySetConfigPathParams withValue(String value) {
        this.value = value;
        return this;
    }
}