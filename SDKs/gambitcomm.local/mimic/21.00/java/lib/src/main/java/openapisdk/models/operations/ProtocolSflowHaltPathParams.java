package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSflowHaltPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSflowHaltPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}