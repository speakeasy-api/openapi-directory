package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetStatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public SetStatePathParams withObject(String object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=state")
    public Integer state;
    public SetStatePathParams withState(Integer state) {
        this.state = state;
        return this;
    }
}