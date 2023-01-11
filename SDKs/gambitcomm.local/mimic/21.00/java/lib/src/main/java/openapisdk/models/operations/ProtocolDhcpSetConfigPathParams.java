package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolDhcpSetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolDhcpSetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=argument")
    public String argument;
    public ProtocolDhcpSetConfigPathParams withArgument(String argument) {
        this.argument = argument;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;
    public ProtocolDhcpSetConfigPathParams withValue(String value) {
        this.value = value;
        return this;
    }
}