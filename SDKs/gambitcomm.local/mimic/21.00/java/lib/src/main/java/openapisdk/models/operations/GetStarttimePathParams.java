package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStarttimePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetStarttimePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}