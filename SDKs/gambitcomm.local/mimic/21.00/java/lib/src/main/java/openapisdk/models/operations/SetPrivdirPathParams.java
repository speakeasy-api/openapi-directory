package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetPrivdirPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetPrivdirPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=privdir")
    public String privdir;
    public SetPrivdirPathParams withPrivdir(String privdir) {
        this.privdir = privdir;
        return this;
    }
}