package openapisdk.models.operations;



public class GetListingCarAuctionIdResponse {
    public String contentType;
    public GetListingCarAuctionIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarAuctionIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Listing listing;
    public GetListingCarAuctionIdResponse withListing(openapisdk.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    public Long statusCode;
    public GetListingCarAuctionIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}