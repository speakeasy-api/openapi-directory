package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3VacmSavePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3VacmSavePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}