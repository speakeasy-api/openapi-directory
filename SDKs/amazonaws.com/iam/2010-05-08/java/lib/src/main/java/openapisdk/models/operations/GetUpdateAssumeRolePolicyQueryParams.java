package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateAssumeRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateAssumeRolePolicyActionEnum action;
    public GetUpdateAssumeRolePolicyQueryParams withAction(GetUpdateAssumeRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyDocument")
    public String policyDocument;
    public GetUpdateAssumeRolePolicyQueryParams withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetUpdateAssumeRolePolicyQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateAssumeRolePolicyVersionEnum version;
    public GetUpdateAssumeRolePolicyQueryParams withVersion(GetUpdateAssumeRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}