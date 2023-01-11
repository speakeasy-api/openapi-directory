package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccountPasswordPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAccountPasswordPolicyActionEnum action;
    public PostGetAccountPasswordPolicyQueryParams withAction(PostGetAccountPasswordPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAccountPasswordPolicyVersionEnum version;
    public PostGetAccountPasswordPolicyQueryParams withVersion(PostGetAccountPasswordPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}