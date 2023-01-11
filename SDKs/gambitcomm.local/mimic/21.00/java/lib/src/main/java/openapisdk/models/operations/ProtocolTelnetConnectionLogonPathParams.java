package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolTelnetConnectionLogonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolTelnetConnectionLogonPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionID")
    public Integer connectionID;
    public ProtocolTelnetConnectionLogonPathParams withConnectionId(Integer connectionID) {
        this.connectionID = connectionID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=password")
    public String password;
    public ProtocolTelnetConnectionLogonPathParams withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public ProtocolTelnetConnectionLogonPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}