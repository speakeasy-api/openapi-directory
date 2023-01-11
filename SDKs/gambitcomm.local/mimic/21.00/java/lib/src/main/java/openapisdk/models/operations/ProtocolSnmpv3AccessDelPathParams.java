package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3AccessDelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessName")
    public String accessName;
    public ProtocolSnmpv3AccessDelPathParams withAccessName(String accessName) {
        this.accessName = accessName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3AccessDelPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}