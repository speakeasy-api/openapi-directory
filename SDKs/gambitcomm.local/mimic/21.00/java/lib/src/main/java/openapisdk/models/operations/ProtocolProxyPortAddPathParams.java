package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolProxyPortAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolProxyPortAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolProxyPortAddPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target")
    public String target;
    public ProtocolProxyPortAddPathParams withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetPort")
    public Integer targetPort;
    public ProtocolProxyPortAddPathParams withTargetPort(Integer targetPort) {
        this.targetPort = targetPort;
        return this;
    }
}