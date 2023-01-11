package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3UsmSavePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3UsmSavePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}