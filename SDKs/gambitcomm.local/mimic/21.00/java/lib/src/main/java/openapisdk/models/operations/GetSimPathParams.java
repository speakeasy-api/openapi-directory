package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetSimPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}