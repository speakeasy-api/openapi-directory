package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMibPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetMibPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetMibPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}