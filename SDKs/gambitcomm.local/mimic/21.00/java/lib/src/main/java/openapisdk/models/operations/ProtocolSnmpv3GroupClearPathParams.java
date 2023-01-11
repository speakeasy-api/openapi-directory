package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3GroupClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3GroupClearPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}