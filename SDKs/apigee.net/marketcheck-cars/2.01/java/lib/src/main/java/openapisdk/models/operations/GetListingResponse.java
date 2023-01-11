package openapisdk.models.operations;



public class GetListingResponse {
    public String contentType;
    public GetListingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Listing listing;
    public GetListingResponse withListing(openapisdk.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    public Long statusCode;
    public GetListingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}