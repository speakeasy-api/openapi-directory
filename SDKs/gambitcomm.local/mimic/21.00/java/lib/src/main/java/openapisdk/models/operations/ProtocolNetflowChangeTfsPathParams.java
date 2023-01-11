package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowChangeTfsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowChangeTfsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interval")
    public Integer interval;
    public ProtocolNetflowChangeTfsPathParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
}