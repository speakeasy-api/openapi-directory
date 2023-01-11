package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolGetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolGetConfigPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=prot")
    public String prot;
    public ProtocolGetConfigPathParams withProt(String prot) {
        this.prot = prot;
        return this;
    }
}