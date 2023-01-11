package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingRvIdMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingRvIdMediaQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}