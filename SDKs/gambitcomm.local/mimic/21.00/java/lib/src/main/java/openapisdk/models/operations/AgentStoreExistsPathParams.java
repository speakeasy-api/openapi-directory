package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreExistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AgentStoreExistsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public AgentStoreExistsPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}