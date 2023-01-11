package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetStarttimePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetStarttimePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=start")
    public Integer start;
    public SetStarttimePathParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}