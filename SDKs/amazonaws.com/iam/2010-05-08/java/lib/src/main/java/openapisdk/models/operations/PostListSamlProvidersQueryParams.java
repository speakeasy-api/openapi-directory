package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSamlProvidersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListSamlProvidersActionEnum action;
    public PostListSamlProvidersQueryParams withAction(PostListSamlProvidersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListSamlProvidersVersionEnum version;
    public PostListSamlProvidersQueryParams withVersion(PostListSamlProvidersVersionEnum version) {
        this.version = version;
        return this;
    }
}