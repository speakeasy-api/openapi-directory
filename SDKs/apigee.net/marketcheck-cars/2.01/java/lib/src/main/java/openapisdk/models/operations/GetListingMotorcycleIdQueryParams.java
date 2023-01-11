package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingMotorcycleIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingMotorcycleIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}