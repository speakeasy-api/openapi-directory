package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetPolicyVersionActionEnum action;
    public GetGetPolicyVersionQueryParams withAction(GetGetPolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetGetPolicyVersionQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetPolicyVersionVersionEnum version;
    public GetGetPolicyVersionQueryParams withVersion(GetGetPolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionId")
    public String versionId;
    public GetGetPolicyVersionQueryParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}