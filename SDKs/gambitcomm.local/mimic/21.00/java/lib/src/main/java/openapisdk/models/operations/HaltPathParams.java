package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HaltPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public HaltPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}