package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolProxySetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolProxySetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enableOrNot")
    public String enableOrNot;
    public ProtocolProxySetTracePathParams withEnableOrNot(String enableOrNot) {
        this.enableOrNot = enableOrNot;
        return this;
    }
}