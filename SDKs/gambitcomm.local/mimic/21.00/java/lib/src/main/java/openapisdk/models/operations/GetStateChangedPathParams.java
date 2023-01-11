package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStateChangedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetStateChangedPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}