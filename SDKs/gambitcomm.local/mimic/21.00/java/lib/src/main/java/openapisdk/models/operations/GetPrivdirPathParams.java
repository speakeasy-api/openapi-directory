package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPrivdirPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetPrivdirPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}