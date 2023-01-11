package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTodGetArgsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTodGetArgsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}