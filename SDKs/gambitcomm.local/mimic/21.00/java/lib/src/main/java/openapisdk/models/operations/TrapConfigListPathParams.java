package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrapConfigListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public TrapConfigListPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}