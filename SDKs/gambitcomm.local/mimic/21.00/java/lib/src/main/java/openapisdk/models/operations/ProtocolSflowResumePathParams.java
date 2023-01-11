package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSflowResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSflowResumePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}