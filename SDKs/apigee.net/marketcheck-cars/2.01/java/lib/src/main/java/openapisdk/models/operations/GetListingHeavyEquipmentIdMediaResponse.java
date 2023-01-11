package openapisdk.models.operations;



public class GetListingHeavyEquipmentIdMediaResponse {
    public String contentType;
    public GetListingHeavyEquipmentIdMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingHeavyEquipmentIdMediaResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ListingMedia listingMedia;
    public GetListingHeavyEquipmentIdMediaResponse withListingMedia(openapisdk.models.shared.ListingMedia listingMedia) {
        this.listingMedia = listingMedia;
        return this;
    }
    public Long statusCode;
    public GetListingHeavyEquipmentIdMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}