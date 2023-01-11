package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachRolePolicyActionEnum action;
    public PostDetachRolePolicyQueryParams withAction(PostDetachRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachRolePolicyVersionEnum version;
    public PostDetachRolePolicyQueryParams withVersion(PostDetachRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}