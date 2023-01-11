package openapisdk.models.operations;



public class GetListingCarAuctionIdExtraResponse {
    public String contentType;
    public GetListingCarAuctionIdExtraResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarAuctionIdExtraResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes;
    public GetListingCarAuctionIdExtraResponse withListingExtraAttributes(openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes) {
        this.listingExtraAttributes = listingExtraAttributes;
        return this;
    }
    public Long statusCode;
    public GetListingCarAuctionIdExtraResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}