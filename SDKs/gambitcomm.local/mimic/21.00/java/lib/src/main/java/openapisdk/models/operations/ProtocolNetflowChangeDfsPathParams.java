package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowChangeDfsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowChangeDfsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interval")
    public Integer interval;
    public ProtocolNetflowChangeDfsPathParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
}