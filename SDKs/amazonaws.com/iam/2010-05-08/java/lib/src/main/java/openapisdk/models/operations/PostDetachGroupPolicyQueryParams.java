package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachGroupPolicyActionEnum action;
    public PostDetachGroupPolicyQueryParams withAction(PostDetachGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachGroupPolicyVersionEnum version;
    public PostDetachGroupPolicyQueryParams withVersion(PostDetachGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}