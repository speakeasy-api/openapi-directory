package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrapListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public TrapListPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}