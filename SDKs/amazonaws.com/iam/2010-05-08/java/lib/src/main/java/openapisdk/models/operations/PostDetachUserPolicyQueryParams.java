package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachUserPolicyActionEnum action;
    public PostDetachUserPolicyQueryParams withAction(PostDetachUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachUserPolicyVersionEnum version;
    public PostDetachUserPolicyQueryParams withVersion(PostDetachUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}