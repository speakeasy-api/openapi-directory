package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSnmpv3ViewAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolSnmpv3ViewAddPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mask")
    public String mask;
    public ProtocolSnmpv3ViewAddPathParams withMask(String mask) {
        this.mask = mask;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subtree")
    public String subtree;
    public ProtocolSnmpv3ViewAddPathParams withSubtree(String subtree) {
        this.subtree = subtree;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=viewName")
    public String viewName;
    public ProtocolSnmpv3ViewAddPathParams withViewName(String viewName) {
        this.viewName = viewName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=viewType")
    public String viewType;
    public ProtocolSnmpv3ViewAddPathParams withViewType(String viewType) {
        this.viewType = viewType;
        return this;
    }
}