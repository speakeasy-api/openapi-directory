package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetInstancesPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetInstancesPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}