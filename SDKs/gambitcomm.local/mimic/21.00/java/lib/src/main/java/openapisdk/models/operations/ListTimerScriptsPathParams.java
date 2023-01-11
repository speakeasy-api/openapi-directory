package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTimerScriptsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ListTimerScriptsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}