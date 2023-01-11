package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolWebPortAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolWebPortAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolWebPortAddPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}