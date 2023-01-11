package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetAdsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listing_ids")
    public String listingIds;
    public GetAdsQueryParams withListingIds(String listingIds) {
        this.listingIds = listingIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetAdsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}