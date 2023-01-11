package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetServerGetUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetServerGetUsersPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}