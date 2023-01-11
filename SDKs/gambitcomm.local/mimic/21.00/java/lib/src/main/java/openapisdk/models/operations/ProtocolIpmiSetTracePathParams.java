package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolIpmiSetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolIpmiSetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enableOrNot")
    public String enableOrNot;
    public ProtocolIpmiSetTracePathParams withEnableOrNot(String enableOrNot) {
        this.enableOrNot = enableOrNot;
        return this;
    }
}