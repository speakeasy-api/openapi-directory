package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowReloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowReloadPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}