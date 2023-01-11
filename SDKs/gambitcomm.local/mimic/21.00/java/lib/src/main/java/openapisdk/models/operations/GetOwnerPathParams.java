package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetOwnerPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}