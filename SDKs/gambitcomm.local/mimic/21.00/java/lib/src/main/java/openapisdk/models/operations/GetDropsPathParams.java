package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetDropsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}