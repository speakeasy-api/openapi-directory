package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTftpSessionStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTftpSessionStopPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionID")
    public String sessionID;
    public ProtocolTftpSessionStopPathParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}