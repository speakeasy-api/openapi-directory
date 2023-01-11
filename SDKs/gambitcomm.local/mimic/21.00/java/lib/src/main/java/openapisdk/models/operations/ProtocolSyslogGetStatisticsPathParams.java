package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSyslogGetStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSyslogGetStatisticsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}