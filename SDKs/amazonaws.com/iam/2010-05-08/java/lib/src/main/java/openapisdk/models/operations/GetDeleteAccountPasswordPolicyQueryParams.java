package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAccountPasswordPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAccountPasswordPolicyActionEnum action;
    public GetDeleteAccountPasswordPolicyQueryParams withAction(GetDeleteAccountPasswordPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAccountPasswordPolicyVersionEnum version;
    public GetDeleteAccountPasswordPolicyQueryParams withVersion(GetDeleteAccountPasswordPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}