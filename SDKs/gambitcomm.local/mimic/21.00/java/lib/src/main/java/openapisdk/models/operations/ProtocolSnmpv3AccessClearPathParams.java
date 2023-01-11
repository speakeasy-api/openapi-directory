package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3AccessClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3AccessClearPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}