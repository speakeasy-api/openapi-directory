package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingRvIdExtraQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingRvIdExtraQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}