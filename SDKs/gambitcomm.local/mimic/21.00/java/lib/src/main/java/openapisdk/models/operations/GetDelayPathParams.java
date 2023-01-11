package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDelayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetDelayPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}