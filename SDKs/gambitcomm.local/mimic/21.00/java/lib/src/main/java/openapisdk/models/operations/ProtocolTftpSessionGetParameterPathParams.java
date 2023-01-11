package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTftpSessionGetParameterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTftpSessionGetParameterPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parameter")
    public String parameter;
    public ProtocolTftpSessionGetParameterPathParams withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionID")
    public String sessionID;
    public ProtocolTftpSessionGetParameterPathParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}