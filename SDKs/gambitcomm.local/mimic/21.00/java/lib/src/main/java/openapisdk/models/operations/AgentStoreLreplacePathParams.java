package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgentStoreLreplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AgentStoreLreplacePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=index")
    public Integer index;
    public AgentStoreLreplacePathParams withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public AgentStoreLreplacePathParams withVar(String var) {
        this.var = var;
        return this;
    }
}