package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3UserClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3UserClearPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}