package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3UserAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3UserAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authKey")
    public String authKey;
    public ProtocolSnmpv3UserAddPathParams withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authProtocol")
    public String authProtocol;
    public ProtocolSnmpv3UserAddPathParams withAuthProtocol(String authProtocol) {
        this.authProtocol = authProtocol;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=privKey")
    public String privKey;
    public ProtocolSnmpv3UserAddPathParams withPrivKey(String privKey) {
        this.privKey = privKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=privProtocol")
    public String privProtocol;
    public ProtocolSnmpv3UserAddPathParams withPrivProtocol(String privProtocol) {
        this.privProtocol = privProtocol;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityName")
    public String securityName;
    public ProtocolSnmpv3UserAddPathParams withSecurityName(String securityName) {
        this.securityName = securityName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userName")
    public String userName;
    public ProtocolSnmpv3UserAddPathParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}