package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSshGetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSshGetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}