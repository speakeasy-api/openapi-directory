package openapisdk.models.operations;



public class GetListingCarFsboIdResponse {
    public String contentType;
    public GetListingCarFsboIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarFsboIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Listing listing;
    public GetListingCarFsboIdResponse withListing(openapisdk.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    public Long statusCode;
    public GetListingCarFsboIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}