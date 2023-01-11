package openapisdk.models.operations;



public class GetListingsByRegionAndDateListingsByRegionAndDateGetResponse {
    public String contentType;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}