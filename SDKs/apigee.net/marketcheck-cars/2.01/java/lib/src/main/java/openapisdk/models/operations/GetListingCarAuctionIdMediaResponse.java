package openapisdk.models.operations;



public class GetListingCarAuctionIdMediaResponse {
    public String contentType;
    public GetListingCarAuctionIdMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarAuctionIdMediaResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingMedia listingMedia;
    public GetListingCarAuctionIdMediaResponse withListingMedia(openapisdk.models.shared.ListingMedia listingMedia) {
        this.listingMedia = listingMedia;
        return this;
    }
    public Long statusCode;
    public GetListingCarAuctionIdMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}