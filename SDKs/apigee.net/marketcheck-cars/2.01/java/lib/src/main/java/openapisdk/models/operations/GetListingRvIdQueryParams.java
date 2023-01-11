package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingRvIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingRvIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}