package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SavePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SavePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}