package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentRemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AgentRemovePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}