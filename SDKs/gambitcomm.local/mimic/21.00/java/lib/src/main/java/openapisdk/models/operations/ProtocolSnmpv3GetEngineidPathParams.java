package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3GetEngineidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3GetEngineidPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}