package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutIdentityPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutIdentityPolicyActionEnum action;
    public GetPutIdentityPolicyQueryParams withAction(GetPutIdentityPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetPutIdentityPolicyQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Policy")
    public String policy;
    public GetPutIdentityPolicyQueryParams withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetPutIdentityPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutIdentityPolicyVersionEnum version;
    public GetPutIdentityPolicyQueryParams withVersion(GetPutIdentityPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}