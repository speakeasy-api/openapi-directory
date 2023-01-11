package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SplitOidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OID")
    public String oid;
    public SplitOidPathParams withOid(String oid) {
        this.oid = oid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SplitOidPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}