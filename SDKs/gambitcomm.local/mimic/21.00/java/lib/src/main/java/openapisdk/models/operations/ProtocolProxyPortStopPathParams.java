package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolProxyPortStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolProxyPortStopPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolProxyPortStopPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}