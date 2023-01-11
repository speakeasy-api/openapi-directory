package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarAuctionIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingCarAuctionIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=append_api_key")
    public Boolean appendApiKey;
    public GetListingCarAuctionIdQueryParams withAppendApiKey(Boolean appendApiKey) {
        this.appendApiKey = appendApiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relevant_links")
    public Boolean includeRelevantLinks;
    public GetListingCarAuctionIdQueryParams withIncludeRelevantLinks(Boolean includeRelevantLinks) {
        this.includeRelevantLinks = includeRelevantLinks;
        return this;
    }
}