package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountPasswordPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateAccountPasswordPolicyActionEnum action;
    public PostUpdateAccountPasswordPolicyQueryParams withAction(PostUpdateAccountPasswordPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateAccountPasswordPolicyVersionEnum version;
    public PostUpdateAccountPasswordPolicyQueryParams withVersion(PostUpdateAccountPasswordPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}