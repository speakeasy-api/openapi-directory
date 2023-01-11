package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolDhcpParamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolDhcpParamsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}