package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSshIpaliasDisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSshIpaliasDisablePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ipaddress")
    public String ipaddress;
    public ProtocolSshIpaliasDisablePathParams withIpaddress(String ipaddress) {
        this.ipaddress = ipaddress;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public ProtocolSshIpaliasDisablePathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}