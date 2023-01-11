package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetDropsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetDropsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=drops")
    public Integer drops;
    public SetDropsPathParams withDrops(Integer drops) {
        this.drops = drops;
        return this;
    }
}