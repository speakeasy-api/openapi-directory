package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrapConfigAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public TrapConfigAddPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public TrapConfigAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public TrapConfigAddPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}