package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelIpaliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public DelIpaliasPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public DelIpaliasPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public DelIpaliasPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}