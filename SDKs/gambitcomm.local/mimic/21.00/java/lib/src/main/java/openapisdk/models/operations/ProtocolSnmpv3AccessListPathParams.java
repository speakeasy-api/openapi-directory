package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3AccessListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3AccessListPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}