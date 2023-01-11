package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigChangedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetConfigChangedPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}