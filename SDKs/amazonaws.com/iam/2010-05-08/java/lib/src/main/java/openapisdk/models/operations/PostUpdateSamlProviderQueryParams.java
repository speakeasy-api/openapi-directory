package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateSamlProviderActionEnum action;
    public PostUpdateSamlProviderQueryParams withAction(PostUpdateSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateSamlProviderVersionEnum version;
    public PostUpdateSamlProviderQueryParams withVersion(PostUpdateSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}