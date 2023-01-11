package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagSamlProviderActionEnum action;
    public PostTagSamlProviderQueryParams withAction(PostTagSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagSamlProviderVersionEnum version;
    public PostTagSamlProviderQueryParams withVersion(PostTagSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}