package openapisdk.models.operations;



public class GetListingCarFsboIdExtraResponse {
    public String contentType;
    public GetListingCarFsboIdExtraResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarFsboIdExtraResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes;
    public GetListingCarFsboIdExtraResponse withListingExtraAttributes(openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes) {
        this.listingExtraAttributes = listingExtraAttributes;
        return this;
    }
    public Long statusCode;
    public GetListingCarFsboIdExtraResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}