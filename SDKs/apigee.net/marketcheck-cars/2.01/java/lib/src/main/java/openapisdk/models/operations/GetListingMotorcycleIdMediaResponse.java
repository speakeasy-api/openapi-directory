package openapisdk.models.operations;



public class GetListingMotorcycleIdMediaResponse {
    public String contentType;
    public GetListingMotorcycleIdMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingMotorcycleIdMediaResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingMedia listingMedia;
    public GetListingMotorcycleIdMediaResponse withListingMedia(openapisdk.models.shared.ListingMedia listingMedia) {
        this.listingMedia = listingMedia;
        return this;
    }
    public Long statusCode;
    public GetListingMotorcycleIdMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}