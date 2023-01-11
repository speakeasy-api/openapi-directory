package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagSamlProviderActionEnum action;
    public PostUntagSamlProviderQueryParams withAction(PostUntagSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagSamlProviderVersionEnum version;
    public PostUntagSamlProviderQueryParams withVersion(PostUntagSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}