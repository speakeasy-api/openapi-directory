package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSshIpaliasIsenabledPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSshIpaliasIsenabledPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ipaddress")
    public String ipaddress;
    public ProtocolSshIpaliasIsenabledPathParams withIpaddress(String ipaddress) {
        this.ipaddress = ipaddress;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolSshIpaliasIsenabledPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}