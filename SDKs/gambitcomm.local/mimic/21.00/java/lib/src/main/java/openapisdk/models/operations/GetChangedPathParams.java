package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetChangedPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}