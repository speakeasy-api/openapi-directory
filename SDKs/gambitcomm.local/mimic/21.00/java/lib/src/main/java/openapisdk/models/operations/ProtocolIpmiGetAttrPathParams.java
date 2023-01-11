package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolIpmiGetAttrPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolIpmiGetAttrPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attr")
    public String attr;
    public ProtocolIpmiGetAttrPathParams withAttr(String attr) {
        this.attr = attr;
        return this;
    }
}