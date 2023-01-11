package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListIdentityPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListIdentityPoliciesActionEnum action;
    public GetListIdentityPoliciesQueryParams withAction(GetListIdentityPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetListIdentityPoliciesQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListIdentityPoliciesVersionEnum version;
    public GetListIdentityPoliciesQueryParams withVersion(GetListIdentityPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}