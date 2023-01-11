package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSamlProviderActionEnum action;
    public PostDeleteSamlProviderQueryParams withAction(PostDeleteSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSamlProviderVersionEnum version;
    public PostDeleteSamlProviderQueryParams withVersion(PostDeleteSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}