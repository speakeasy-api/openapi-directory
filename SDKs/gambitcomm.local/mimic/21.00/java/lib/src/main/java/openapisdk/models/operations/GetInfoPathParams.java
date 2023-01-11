package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetInfoPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetInfoPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}