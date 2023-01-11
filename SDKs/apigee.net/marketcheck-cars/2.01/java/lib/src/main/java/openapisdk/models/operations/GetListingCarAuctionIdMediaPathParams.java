package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarAuctionIdMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingCarAuctionIdMediaPathParams withId(String id) {
        this.id = id;
        return this;
    }
}