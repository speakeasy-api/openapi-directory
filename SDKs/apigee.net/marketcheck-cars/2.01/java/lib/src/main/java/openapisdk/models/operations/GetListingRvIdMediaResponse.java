package openapisdk.models.operations;



public class GetListingRvIdMediaResponse {
    public String contentType;
    public GetListingRvIdMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingRvIdMediaResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingMedia listingMedia;
    public GetListingRvIdMediaResponse withListingMedia(openapisdk.models.shared.ListingMedia listingMedia) {
        this.listingMedia = listingMedia;
        return this;
    }
    public Long statusCode;
    public GetListingRvIdMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}