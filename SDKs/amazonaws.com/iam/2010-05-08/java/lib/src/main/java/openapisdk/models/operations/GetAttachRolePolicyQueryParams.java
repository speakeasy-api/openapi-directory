package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachRolePolicyActionEnum action;
    public GetAttachRolePolicyQueryParams withAction(GetAttachRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetAttachRolePolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetAttachRolePolicyQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachRolePolicyVersionEnum version;
    public GetAttachRolePolicyQueryParams withVersion(GetAttachRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}