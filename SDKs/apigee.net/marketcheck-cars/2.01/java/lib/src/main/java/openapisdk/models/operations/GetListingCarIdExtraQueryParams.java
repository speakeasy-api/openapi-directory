package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarIdExtraQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingCarIdExtraQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}