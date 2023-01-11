package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteUserPolicyActionEnum action;
    public GetDeleteUserPolicyQueryParams withAction(GetDeleteUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetDeleteUserPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteUserPolicyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteUserPolicyVersionEnum version;
    public GetDeleteUserPolicyQueryParams withVersion(GetDeleteUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}