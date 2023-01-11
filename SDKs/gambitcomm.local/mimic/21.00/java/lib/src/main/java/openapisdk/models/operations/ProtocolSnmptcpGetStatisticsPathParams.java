package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmptcpGetStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmptcpGetStatisticsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}