package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProtocolsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetProtocolsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}