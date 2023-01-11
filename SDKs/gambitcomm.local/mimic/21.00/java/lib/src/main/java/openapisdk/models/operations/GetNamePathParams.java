package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OID")
    public String oid;
    public GetNamePathParams withOid(String oid) {
        this.oid = oid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetNamePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}