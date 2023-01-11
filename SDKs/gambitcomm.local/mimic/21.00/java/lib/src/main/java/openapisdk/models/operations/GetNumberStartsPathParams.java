package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumberStartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetNumberStartsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}