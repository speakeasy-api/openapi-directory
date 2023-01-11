package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StatusIpaliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public StatusIpaliasPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public StatusIpaliasPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public StatusIpaliasPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}