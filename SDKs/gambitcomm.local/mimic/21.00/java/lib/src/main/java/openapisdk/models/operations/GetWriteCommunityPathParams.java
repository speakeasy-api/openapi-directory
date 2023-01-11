package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWriteCommunityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetWriteCommunityPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}