package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolProxyPortRemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolProxyPortRemovePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolProxyPortRemovePathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}