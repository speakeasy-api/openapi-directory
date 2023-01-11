package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Long agentNum;
    public GetMaskPathParams withAgentNum(Long agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}