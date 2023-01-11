package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetInformTimeoutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetInformTimeoutPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inform_timeout")
    public Integer informTimeout;
    public SetInformTimeoutPathParams withInformTimeout(Integer informTimeout) {
        this.informTimeout = informTimeout;
        return this;
    }
}