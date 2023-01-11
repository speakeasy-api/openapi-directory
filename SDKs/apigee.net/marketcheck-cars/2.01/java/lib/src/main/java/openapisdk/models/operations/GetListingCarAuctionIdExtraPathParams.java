package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarAuctionIdExtraPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingCarAuctionIdExtraPathParams withId(String id) {
        this.id = id;
        return this;
    }
}