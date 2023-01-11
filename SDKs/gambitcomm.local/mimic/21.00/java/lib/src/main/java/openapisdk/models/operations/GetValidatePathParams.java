package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetValidatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetValidatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}