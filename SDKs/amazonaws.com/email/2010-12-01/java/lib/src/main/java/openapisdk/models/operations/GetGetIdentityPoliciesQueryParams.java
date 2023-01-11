package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetIdentityPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetIdentityPoliciesActionEnum action;
    public GetGetIdentityPoliciesQueryParams withAction(GetGetIdentityPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetGetIdentityPoliciesQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyNames")
    public String[] policyNames;
    public GetGetIdentityPoliciesQueryParams withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetIdentityPoliciesVersionEnum version;
    public GetGetIdentityPoliciesQueryParams withVersion(GetGetIdentityPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}