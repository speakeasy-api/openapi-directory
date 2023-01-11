package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddIpaliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public AddIpaliasPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AddIpaliasPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interface")
    public String interface_;
    public AddIpaliasPathParams withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mask")
    public String mask;
    public AddIpaliasPathParams withMask(String mask) {
        this.mask = mask;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=port")
    public Integer port;
    public AddIpaliasPathParams withPort(Integer port) {
        this.port = port;
        return this;
    }
}