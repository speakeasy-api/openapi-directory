package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Long agentNum;
    public SetInterfacePathParams withAgentNum(Long agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interface")
    public String interface_;
    public SetInterfacePathParams withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
}