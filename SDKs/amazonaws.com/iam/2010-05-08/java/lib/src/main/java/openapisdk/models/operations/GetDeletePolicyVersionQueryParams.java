package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeletePolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeletePolicyVersionActionEnum action;
    public GetDeletePolicyVersionQueryParams withAction(GetDeletePolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetDeletePolicyVersionQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeletePolicyVersionVersionEnum version;
    public GetDeletePolicyVersionQueryParams withVersion(GetDeletePolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionId")
    public String versionId;
    public GetDeletePolicyVersionQueryParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}