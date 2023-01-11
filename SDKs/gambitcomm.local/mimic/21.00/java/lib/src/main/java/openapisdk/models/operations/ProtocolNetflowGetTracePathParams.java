package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowGetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowGetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}