package openapisdk.models.operations;



public class GetListingCarIdExtraResponse {
    public String contentType;
    public GetListingCarIdExtraResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingCarIdExtraResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes;
    public GetListingCarIdExtraResponse withListingExtraAttributes(openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes) {
        this.listingExtraAttributes = listingExtraAttributes;
        return this;
    }
    public Long statusCode;
    public GetListingCarIdExtraResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}