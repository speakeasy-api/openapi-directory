package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSamlProviderActionEnum action;
    public PostGetSamlProviderQueryParams withAction(PostGetSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSamlProviderVersionEnum version;
    public PostGetSamlProviderQueryParams withVersion(PostGetSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}