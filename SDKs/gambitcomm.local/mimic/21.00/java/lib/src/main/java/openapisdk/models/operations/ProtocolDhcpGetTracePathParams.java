package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolDhcpGetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolDhcpGetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}