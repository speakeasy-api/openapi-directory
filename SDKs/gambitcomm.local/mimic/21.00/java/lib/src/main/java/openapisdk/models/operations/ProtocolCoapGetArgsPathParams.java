package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolCoapGetArgsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolCoapGetArgsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}