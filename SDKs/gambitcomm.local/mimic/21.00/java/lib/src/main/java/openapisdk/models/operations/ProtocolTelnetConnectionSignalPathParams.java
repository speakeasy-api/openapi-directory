package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetConnectionSignalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetConnectionSignalPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionID")
    public Integer connectionID;
    public ProtocolTelnetConnectionSignalPathParams withConnectionId(Integer connectionID) {
        this.connectionID = connectionID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=signalName")
    public String signalName;
    public ProtocolTelnetConnectionSignalPathParams withSignalName(String signalName) {
        this.signalName = signalName;
        return this;
    }
}