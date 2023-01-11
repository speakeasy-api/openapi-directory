package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetProtocolsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetProtocolsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}