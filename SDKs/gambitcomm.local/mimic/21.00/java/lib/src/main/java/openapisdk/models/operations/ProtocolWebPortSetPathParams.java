package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolWebPortSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolWebPortSetPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolWebPortSetPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=protocol")
    public String protocol;
    public ProtocolWebPortSetPathParams withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public ProtocolWebPortSetPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}