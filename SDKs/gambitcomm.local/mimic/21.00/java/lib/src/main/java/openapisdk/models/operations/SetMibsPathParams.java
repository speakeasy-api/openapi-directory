package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMibsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetMibsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}