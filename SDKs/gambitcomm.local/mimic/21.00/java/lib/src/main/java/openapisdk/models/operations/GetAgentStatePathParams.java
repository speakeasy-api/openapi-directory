package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetAgentStatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}