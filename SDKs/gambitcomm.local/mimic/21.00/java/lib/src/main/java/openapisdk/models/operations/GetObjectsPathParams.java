package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OID")
    public String oid;
    public GetObjectsPathParams withOid(String oid) {
        this.oid = oid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public GetObjectsPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}