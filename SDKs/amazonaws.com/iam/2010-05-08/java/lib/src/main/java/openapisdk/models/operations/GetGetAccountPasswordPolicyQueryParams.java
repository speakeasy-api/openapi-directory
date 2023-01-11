package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAccountPasswordPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAccountPasswordPolicyActionEnum action;
    public GetGetAccountPasswordPolicyQueryParams withAction(GetGetAccountPasswordPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAccountPasswordPolicyVersionEnum version;
    public GetGetAccountPasswordPolicyQueryParams withVersion(GetGetAccountPasswordPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}