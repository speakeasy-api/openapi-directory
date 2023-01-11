package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetDelayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetDelayPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=delay")
    public Integer delay;
    public SetDelayPathParams withDelay(Integer delay) {
        this.delay = delay;
        return this;
    }
}