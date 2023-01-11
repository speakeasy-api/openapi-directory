package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerMotorcycleIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDealerMotorcycleIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public Boolean provider;
    public GetDealerMotorcycleIdQueryParams withProvider(Boolean provider) {
        this.provider = provider;
        return this;
    }
}