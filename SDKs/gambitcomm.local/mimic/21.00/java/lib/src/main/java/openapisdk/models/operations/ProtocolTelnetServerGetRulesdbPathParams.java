package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetServerGetRulesdbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetServerGetRulesdbPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}