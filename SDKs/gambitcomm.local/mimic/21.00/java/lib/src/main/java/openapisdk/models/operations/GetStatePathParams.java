package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetStatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetStatePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}