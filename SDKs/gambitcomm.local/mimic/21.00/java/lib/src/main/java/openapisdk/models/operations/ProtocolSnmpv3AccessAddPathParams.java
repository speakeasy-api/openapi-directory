package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3AccessAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3AccessAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contextMatch")
    public String contextMatch;
    public ProtocolSnmpv3AccessAddPathParams withContextMatch(String contextMatch) {
        this.contextMatch = contextMatch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupName")
    public String groupName;
    public ProtocolSnmpv3AccessAddPathParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=notifyView")
    public String notifyView;
    public ProtocolSnmpv3AccessAddPathParams withNotifyView(String notifyView) {
        this.notifyView = notifyView;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=prefix")
    public String prefix;
    public ProtocolSnmpv3AccessAddPathParams withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=readView")
    public String readView;
    public ProtocolSnmpv3AccessAddPathParams withReadView(String readView) {
        this.readView = readView;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityLevel")
    public String securityLevel;
    public ProtocolSnmpv3AccessAddPathParams withSecurityLevel(String securityLevel) {
        this.securityLevel = securityLevel;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityModel")
    public String securityModel;
    public ProtocolSnmpv3AccessAddPathParams withSecurityModel(String securityModel) {
        this.securityModel = securityModel;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=writeView")
    public String writeView;
    public ProtocolSnmpv3AccessAddPathParams withWriteView(String writeView) {
        this.writeView = writeView;
        return this;
    }
}