package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarAuctionIdExtraQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingCarAuctionIdExtraQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}