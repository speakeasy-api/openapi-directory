package openapisdk.models.operations;



public class GetListingMotorcycleIdExtraResponse {
    public String contentType;
    public GetListingMotorcycleIdExtraResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingMotorcycleIdExtraResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes;
    public GetListingMotorcycleIdExtraResponse withListingExtraAttributes(openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes) {
        this.listingExtraAttributes = listingExtraAttributes;
        return this;
    }
    public Long statusCode;
    public GetListingMotorcycleIdExtraResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}