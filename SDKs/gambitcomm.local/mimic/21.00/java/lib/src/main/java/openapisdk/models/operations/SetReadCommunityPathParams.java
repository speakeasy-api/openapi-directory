package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetReadCommunityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetReadCommunityPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=read")
    public String read;
    public SetReadCommunityPathParams withRead(String read) {
        this.read = read;
        return this;
    }
}