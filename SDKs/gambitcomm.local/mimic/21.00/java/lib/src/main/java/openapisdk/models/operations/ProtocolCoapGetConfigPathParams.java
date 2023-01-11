package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolCoapGetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolCoapGetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}