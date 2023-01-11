package openapisdk.models.operations;



public class GetListingsByRegionListingsByRegionGetResponse {
    public String contentType;
    public GetListingsByRegionListingsByRegionGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetListingsByRegionListingsByRegionGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public GetListingsByRegionListingsByRegionGetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public GetListingsByRegionListingsByRegionGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}