package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetDefaultPolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetDefaultPolicyVersionActionEnum action;
    public PostSetDefaultPolicyVersionQueryParams withAction(PostSetDefaultPolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetDefaultPolicyVersionVersionEnum version;
    public PostSetDefaultPolicyVersionQueryParams withVersion(PostSetDefaultPolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}