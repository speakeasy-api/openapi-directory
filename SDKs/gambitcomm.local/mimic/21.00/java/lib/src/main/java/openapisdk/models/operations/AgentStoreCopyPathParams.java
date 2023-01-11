package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreCopyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AgentStoreCopyPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=otherAgent")
    public Integer otherAgent;
    public AgentStoreCopyPathParams withOtherAgent(Integer otherAgent) {
        this.otherAgent = otherAgent;
        return this;
    }
}