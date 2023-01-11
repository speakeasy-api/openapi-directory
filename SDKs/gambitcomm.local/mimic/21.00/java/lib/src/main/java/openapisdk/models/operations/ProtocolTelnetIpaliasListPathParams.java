package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetIpaliasListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetIpaliasListPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}