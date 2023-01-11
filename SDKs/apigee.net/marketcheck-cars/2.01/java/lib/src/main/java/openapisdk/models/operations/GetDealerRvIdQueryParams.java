package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerRvIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDealerRvIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public Boolean provider;
    public GetDealerRvIdQueryParams withProvider(Boolean provider) {
        this.provider = provider;
        return this;
    }
}