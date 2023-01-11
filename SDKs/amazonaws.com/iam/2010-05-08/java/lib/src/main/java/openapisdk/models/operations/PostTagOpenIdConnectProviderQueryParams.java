package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagOpenIdConnectProviderActionEnum action;
    public PostTagOpenIdConnectProviderQueryParams withAction(PostTagOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagOpenIdConnectProviderVersionEnum version;
    public PostTagOpenIdConnectProviderQueryParams withVersion(PostTagOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}