package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=trace")
    public Integer trace;
    public SetTracePathParams withTrace(Integer trace) {
        this.trace = trace;
        return this;
    }
}