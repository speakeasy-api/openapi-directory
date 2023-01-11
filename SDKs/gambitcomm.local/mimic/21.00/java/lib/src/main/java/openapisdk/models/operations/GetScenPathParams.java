package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetScenPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}