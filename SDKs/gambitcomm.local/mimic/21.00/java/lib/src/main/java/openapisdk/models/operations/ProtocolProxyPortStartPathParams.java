package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolProxyPortStartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolProxyPortStartPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolProxyPortStartPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}