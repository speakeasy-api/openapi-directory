package openapisdk.models.operations;



public class GetListingsByDealerListingsByDateGetResponse {
    public String contentType;
    public GetListingsByDealerListingsByDateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetListingsByDealerListingsByDateGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public GetListingsByDealerListingsByDateGetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public GetListingsByDealerListingsByDateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}