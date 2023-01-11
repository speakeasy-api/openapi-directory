package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOiddirPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetOiddirPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}