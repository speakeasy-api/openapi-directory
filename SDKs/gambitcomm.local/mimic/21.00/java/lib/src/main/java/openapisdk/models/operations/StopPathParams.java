package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public StopPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}