package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetServerGetUserdbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetServerGetUserdbPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}