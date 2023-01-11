package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowListPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}