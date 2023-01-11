package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetOiddirPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetOiddirPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=oiddir")
    public String oiddir;
    public SetOiddirPathParams withOiddir(String oiddir) {
        this.oiddir = oiddir;
        return this;
    }
}