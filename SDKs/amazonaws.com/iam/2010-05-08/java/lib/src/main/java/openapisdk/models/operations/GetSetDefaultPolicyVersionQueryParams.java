package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetDefaultPolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetDefaultPolicyVersionActionEnum action;
    public GetSetDefaultPolicyVersionQueryParams withAction(GetSetDefaultPolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetSetDefaultPolicyVersionQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetDefaultPolicyVersionVersionEnum version;
    public GetSetDefaultPolicyVersionQueryParams withVersion(GetSetDefaultPolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionId")
    public String versionId;
    public GetSetDefaultPolicyVersionQueryParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}