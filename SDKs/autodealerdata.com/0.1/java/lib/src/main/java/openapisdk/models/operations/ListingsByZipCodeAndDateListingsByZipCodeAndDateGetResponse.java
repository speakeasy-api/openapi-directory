package openapisdk.models.operations;



public class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse {
    public String contentType;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}