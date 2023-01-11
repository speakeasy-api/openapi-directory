package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartIpaliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public StartIpaliasPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public StartIpaliasPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public StartIpaliasPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}