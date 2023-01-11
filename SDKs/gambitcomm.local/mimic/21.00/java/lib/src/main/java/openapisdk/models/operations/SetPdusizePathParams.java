package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetPdusizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetPdusizePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pdusize")
    public Integer pdusize;
    public SetPdusizePathParams withPdusize(Integer pdusize) {
        this.pdusize = pdusize;
        return this;
    }
}