package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAccountPasswordPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAccountPasswordPolicyActionEnum action;
    public PostDeleteAccountPasswordPolicyQueryParams withAction(PostDeleteAccountPasswordPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAccountPasswordPolicyVersionEnum version;
    public PostDeleteAccountPasswordPolicyQueryParams withVersion(PostDeleteAccountPasswordPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}