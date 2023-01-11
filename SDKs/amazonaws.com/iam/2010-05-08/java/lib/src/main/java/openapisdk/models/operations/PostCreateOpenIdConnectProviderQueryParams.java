package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateOpenIdConnectProviderActionEnum action;
    public PostCreateOpenIdConnectProviderQueryParams withAction(PostCreateOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateOpenIdConnectProviderVersionEnum version;
    public PostCreateOpenIdConnectProviderQueryParams withVersion(PostCreateOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}