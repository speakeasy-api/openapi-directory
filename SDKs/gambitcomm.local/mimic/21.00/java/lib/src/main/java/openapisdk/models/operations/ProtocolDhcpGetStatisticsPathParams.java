package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolDhcpGetStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolDhcpGetStatisticsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}