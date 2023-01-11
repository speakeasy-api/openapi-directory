package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetHostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Long agentNum;
    public SetHostPathParams withAgentNum(Long agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=host")
    public String host;
    public SetHostPathParams withHost(String host) {
        this.host = host;
        return this;
    }
}