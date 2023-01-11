package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolWebPortStartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolWebPortStartPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolWebPortStartPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}