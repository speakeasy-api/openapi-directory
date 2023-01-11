package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowGetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowGetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}