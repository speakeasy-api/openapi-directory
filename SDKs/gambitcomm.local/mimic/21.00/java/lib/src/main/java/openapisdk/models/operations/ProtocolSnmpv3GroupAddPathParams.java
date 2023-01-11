package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3GroupAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3GroupAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupName")
    public String groupName;
    public ProtocolSnmpv3GroupAddPathParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityModel")
    public String securityModel;
    public ProtocolSnmpv3GroupAddPathParams withSecurityModel(String securityModel) {
        this.securityModel = securityModel;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityName")
    public String securityName;
    public ProtocolSnmpv3GroupAddPathParams withSecurityName(String securityName) {
        this.securityName = securityName;
        return this;
    }
}