package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ReloadPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}