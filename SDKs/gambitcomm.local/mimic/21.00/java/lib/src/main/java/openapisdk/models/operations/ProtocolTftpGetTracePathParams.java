package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTftpGetTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTftpGetTracePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}