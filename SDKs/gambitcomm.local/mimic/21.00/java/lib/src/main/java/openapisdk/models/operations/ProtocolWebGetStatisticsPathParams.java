package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolWebGetStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolWebGetStatisticsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}