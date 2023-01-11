package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public StartPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}