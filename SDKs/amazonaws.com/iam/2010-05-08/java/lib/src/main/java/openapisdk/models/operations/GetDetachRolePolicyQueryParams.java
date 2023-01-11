package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachRolePolicyActionEnum action;
    public GetDetachRolePolicyQueryParams withAction(GetDetachRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetDetachRolePolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetDetachRolePolicyQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachRolePolicyVersionEnum version;
    public GetDetachRolePolicyQueryParams withVersion(GetDetachRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}