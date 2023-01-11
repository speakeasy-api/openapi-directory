package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSflowGetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSflowGetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}