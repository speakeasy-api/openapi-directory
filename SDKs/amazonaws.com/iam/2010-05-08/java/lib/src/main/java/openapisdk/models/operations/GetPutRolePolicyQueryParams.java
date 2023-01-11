package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutRolePolicyActionEnum action;
    public GetPutRolePolicyQueryParams withAction(GetPutRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyDocument")
    public String policyDocument;
    public GetPutRolePolicyQueryParams withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetPutRolePolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetPutRolePolicyQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutRolePolicyVersionEnum version;
    public GetPutRolePolicyQueryParams withVersion(GetPutRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}