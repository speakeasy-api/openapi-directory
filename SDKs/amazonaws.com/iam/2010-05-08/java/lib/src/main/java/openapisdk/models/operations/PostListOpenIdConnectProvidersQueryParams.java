package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListOpenIdConnectProvidersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListOpenIdConnectProvidersActionEnum action;
    public PostListOpenIdConnectProvidersQueryParams withAction(PostListOpenIdConnectProvidersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListOpenIdConnectProvidersVersionEnum version;
    public PostListOpenIdConnectProvidersQueryParams withVersion(PostListOpenIdConnectProvidersVersionEnum version) {
        this.version = version;
        return this;
    }
}