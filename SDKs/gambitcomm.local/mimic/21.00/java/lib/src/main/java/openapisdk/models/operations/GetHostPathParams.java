package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Long agentNum;
    public GetHostPathParams withAgentNum(Long agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}