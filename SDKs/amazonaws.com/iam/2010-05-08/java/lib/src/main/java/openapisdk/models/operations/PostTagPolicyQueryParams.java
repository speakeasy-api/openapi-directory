package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagPolicyActionEnum action;
    public PostTagPolicyQueryParams withAction(PostTagPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagPolicyVersionEnum version;
    public PostTagPolicyQueryParams withVersion(PostTagPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}