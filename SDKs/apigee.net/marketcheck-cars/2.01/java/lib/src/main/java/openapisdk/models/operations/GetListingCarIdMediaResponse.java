package openapisdk.models.operations;



public class GetListingCarIdMediaResponse {
    public String contentType;
    public GetListingCarIdMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarIdMediaResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingMedia listingMedia;
    public GetListingCarIdMediaResponse withListingMedia(openapisdk.models.shared.ListingMedia listingMedia) {
        this.listingMedia = listingMedia;
        return this;
    }
    public Long statusCode;
    public GetListingCarIdMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}