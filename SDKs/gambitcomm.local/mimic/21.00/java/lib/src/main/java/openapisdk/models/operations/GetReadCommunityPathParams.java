package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReadCommunityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetReadCommunityPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}