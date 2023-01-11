package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetWriteCommunityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetWriteCommunityPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=write")
    public String write;
    public SetWriteCommunityPathParams withWrite(String write) {
        this.write = write;
        return this;
    }
}