package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSflowReloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSflowReloadPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}