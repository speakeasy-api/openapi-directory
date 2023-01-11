package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AgentStoreGetPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public AgentStoreGetPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}