package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetOwnerPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public SetOwnerPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
}