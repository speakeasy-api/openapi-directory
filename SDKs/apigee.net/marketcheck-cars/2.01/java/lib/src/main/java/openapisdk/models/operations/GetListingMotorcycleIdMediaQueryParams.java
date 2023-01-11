package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingMotorcycleIdMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingMotorcycleIdMediaQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}