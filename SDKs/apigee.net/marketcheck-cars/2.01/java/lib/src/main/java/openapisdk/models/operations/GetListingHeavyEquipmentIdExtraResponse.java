package openapisdk.models.operations;



public class GetListingHeavyEquipmentIdExtraResponse {
    public String contentType;
    public GetListingHeavyEquipmentIdExtraResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingHeavyEquipmentIdExtraResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes;
    public GetListingHeavyEquipmentIdExtraResponse withListingExtraAttributes(openapisdk.models.shared.ListingExtraAttributes listingExtraAttributes) {
        this.listingExtraAttributes = listingExtraAttributes;
        return this;
    }
    public Long statusCode;
    public GetListingHeavyEquipmentIdExtraResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}