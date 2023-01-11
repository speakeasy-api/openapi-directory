package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInformTimeoutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetInformTimeoutPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}