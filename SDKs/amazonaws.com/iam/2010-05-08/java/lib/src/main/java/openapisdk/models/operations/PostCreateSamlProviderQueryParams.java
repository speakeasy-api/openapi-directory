package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSamlProviderActionEnum action;
    public PostCreateSamlProviderQueryParams withAction(PostCreateSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSamlProviderVersionEnum version;
    public PostCreateSamlProviderQueryParams withVersion(PostCreateSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}