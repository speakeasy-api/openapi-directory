package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetRolePolicyActionEnum action;
    public GetGetRolePolicyQueryParams withAction(GetGetRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetGetRolePolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetGetRolePolicyQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetRolePolicyVersionEnum version;
    public GetGetRolePolicyQueryParams withVersion(GetGetRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}