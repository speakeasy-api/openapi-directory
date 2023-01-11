package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetPortPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}