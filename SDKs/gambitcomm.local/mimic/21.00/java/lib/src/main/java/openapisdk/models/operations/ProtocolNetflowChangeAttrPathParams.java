package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolNetflowChangeAttrPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ProtocolNetflowChangeAttrPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attr")
    public String attr;
    public ProtocolNetflowChangeAttrPathParams withAttr(String attr) {
        this.attr = attr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=field-num")
    public Integer fieldNum;
    public ProtocolNetflowChangeAttrPathParams withFieldNum(Integer fieldNum) {
        this.fieldNum = fieldNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=flowset-uid")
    public Integer flowsetUid;
    public ProtocolNetflowChangeAttrPathParams withFlowsetUid(Integer flowsetUid) {
        this.flowsetUid = flowsetUid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value")
    public String value;
    public ProtocolNetflowChangeAttrPathParams withValue(String value) {
        this.value = value;
        return this;
    }
}