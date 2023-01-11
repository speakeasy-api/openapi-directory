package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCachedImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageID")
    public String imageID;
    public GetCachedImagePathParams withImageId(String imageID) {
        this.imageID = imageID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=listingID")
    public String listingID;
    public GetCachedImagePathParams withListingId(String listingID) {
        this.listingID = listingID;
        return this;
    }
}