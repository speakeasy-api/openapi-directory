package openapisdk.models.operations;



public class GetListings2Listings2GetResponse {
    public String contentType;
    public GetListings2Listings2GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetListings2Listings2GetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public GetListings2Listings2GetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public GetListings2Listings2GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}