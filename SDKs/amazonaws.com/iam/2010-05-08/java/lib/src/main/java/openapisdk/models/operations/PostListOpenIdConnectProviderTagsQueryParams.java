package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListOpenIdConnectProviderTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListOpenIdConnectProviderTagsActionEnum action;
    public PostListOpenIdConnectProviderTagsQueryParams withAction(PostListOpenIdConnectProviderTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListOpenIdConnectProviderTagsVersionEnum version;
    public PostListOpenIdConnectProviderTagsQueryParams withVersion(PostListOpenIdConnectProviderTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}