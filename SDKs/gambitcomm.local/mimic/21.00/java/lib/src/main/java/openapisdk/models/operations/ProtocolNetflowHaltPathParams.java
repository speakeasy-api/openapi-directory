package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowHaltPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowHaltPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}