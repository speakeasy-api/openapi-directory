package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AgentStoreListPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}