package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetPortPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetPortPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public SetPortPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}