package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MunsetValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public MunsetValuePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}