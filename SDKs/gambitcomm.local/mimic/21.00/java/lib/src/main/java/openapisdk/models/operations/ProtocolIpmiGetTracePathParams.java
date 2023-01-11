package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolIpmiGetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolIpmiGetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}