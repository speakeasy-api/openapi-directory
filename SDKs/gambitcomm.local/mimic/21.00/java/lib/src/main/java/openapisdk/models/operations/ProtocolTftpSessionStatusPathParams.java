package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTftpSessionStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTftpSessionStatusPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionID")
    public String sessionID;
    public ProtocolTftpSessionStatusPathParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}