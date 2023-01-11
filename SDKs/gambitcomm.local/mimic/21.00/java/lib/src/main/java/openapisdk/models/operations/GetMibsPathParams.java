package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMibsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetMibsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}