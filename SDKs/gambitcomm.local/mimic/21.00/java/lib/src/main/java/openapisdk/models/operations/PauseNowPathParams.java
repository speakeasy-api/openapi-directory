package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PauseNowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public PauseNowPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}