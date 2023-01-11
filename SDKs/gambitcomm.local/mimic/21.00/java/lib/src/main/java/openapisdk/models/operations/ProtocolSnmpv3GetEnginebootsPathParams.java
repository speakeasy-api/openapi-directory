package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3GetEnginebootsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3GetEnginebootsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}