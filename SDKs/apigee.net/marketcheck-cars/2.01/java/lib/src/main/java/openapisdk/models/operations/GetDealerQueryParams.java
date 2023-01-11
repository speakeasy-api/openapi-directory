package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDealerQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public Boolean provider;
    public GetDealerQueryParams withProvider(Boolean provider) {
        this.provider = provider;
        return this;
    }
}