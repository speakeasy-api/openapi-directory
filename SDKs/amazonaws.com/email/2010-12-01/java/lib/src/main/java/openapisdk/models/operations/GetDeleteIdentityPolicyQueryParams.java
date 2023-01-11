package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteIdentityPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteIdentityPolicyActionEnum action;
    public GetDeleteIdentityPolicyQueryParams withAction(GetDeleteIdentityPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetDeleteIdentityPolicyQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetDeleteIdentityPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteIdentityPolicyVersionEnum version;
    public GetDeleteIdentityPolicyQueryParams withVersion(GetDeleteIdentityPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}