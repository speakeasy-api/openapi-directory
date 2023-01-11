package openapisdk.models.operations;



public class ListingsByZipCodeListingsByZipCodeGetResponse {
    public String contentType;
    public ListingsByZipCodeListingsByZipCodeGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ListingsByZipCodeListingsByZipCodeGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ListingResp listingResp;
    public ListingsByZipCodeListingsByZipCodeGetResponse withListingResp(openapisdk.models.shared.ListingResp listingResp) {
        this.listingResp = listingResp;
        return this;
    }
    public Long statusCode;
    public ListingsByZipCodeListingsByZipCodeGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}