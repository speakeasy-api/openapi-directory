package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetUserPolicyActionEnum action;
    public GetGetUserPolicyQueryParams withAction(GetGetUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetGetUserPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetGetUserPolicyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetUserPolicyVersionEnum version;
    public GetGetUserPolicyQueryParams withVersion(GetGetUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}