package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSamlProviderTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListSamlProviderTagsActionEnum action;
    public PostListSamlProviderTagsQueryParams withAction(PostListSamlProviderTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListSamlProviderTagsVersionEnum version;
    public PostListSamlProviderTagsQueryParams withVersion(PostListSamlProviderTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}