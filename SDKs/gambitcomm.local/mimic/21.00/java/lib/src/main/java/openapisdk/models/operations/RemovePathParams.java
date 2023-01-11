package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public RemovePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public RemovePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public RemovePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}