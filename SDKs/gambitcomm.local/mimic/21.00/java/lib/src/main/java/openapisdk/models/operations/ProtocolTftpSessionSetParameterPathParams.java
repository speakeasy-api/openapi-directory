package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTftpSessionSetParameterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTftpSessionSetParameterPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parameter")
    public String parameter;
    public ProtocolTftpSessionSetParameterPathParams withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionID")
    public String sessionID;
    public ProtocolTftpSessionSetParameterPathParams withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;
    public ProtocolTftpSessionSetParameterPathParams withValue(String value) {
        this.value = value;
        return this;
    }
}