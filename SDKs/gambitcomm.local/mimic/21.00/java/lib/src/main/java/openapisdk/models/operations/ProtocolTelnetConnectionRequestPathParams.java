package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetConnectionRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetConnectionRequestPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=command")
    public String command;
    public ProtocolTelnetConnectionRequestPathParams withCommand(String command) {
        this.command = command;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionID")
    public Integer connectionID;
    public ProtocolTelnetConnectionRequestPathParams withConnectionId(Integer connectionID) {
        this.connectionID = connectionID;
        return this;
    }
}