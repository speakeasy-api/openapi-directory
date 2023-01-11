package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Long agentNum;
    public GetInterfacePathParams withAgentNum(Long agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}