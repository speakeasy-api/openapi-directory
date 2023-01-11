package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ResumePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}