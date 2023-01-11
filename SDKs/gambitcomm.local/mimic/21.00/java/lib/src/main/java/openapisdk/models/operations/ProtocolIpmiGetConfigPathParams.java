package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolIpmiGetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolIpmiGetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}