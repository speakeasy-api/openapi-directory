package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetServerGetStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetServerGetStatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}