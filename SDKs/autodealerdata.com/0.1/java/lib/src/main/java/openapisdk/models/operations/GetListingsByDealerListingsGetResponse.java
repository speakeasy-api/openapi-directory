package openapisdk.models.operations;



public class GetListingsByDealerListingsGetResponse {
    public String contentType;
    public GetListingsByDealerListingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetListingsByDealerListingsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public GetListingsByDealerListingsGetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public GetListingsByDealerListingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}