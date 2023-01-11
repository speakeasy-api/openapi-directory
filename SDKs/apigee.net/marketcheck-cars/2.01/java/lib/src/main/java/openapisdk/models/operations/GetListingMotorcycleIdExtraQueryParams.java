package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingMotorcycleIdExtraQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingMotorcycleIdExtraQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}