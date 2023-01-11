package openapisdk.models.operations;



public class GetListingHeavyEquipmentIdResponse {
    public String contentType;
    public GetListingHeavyEquipmentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingHeavyEquipmentIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.HeavyEquipmentsListing heavyEquipmentsListing;
    public GetListingHeavyEquipmentIdResponse withHeavyEquipmentsListing(openapisdk.models.shared.HeavyEquipmentsListing heavyEquipmentsListing) {
        this.heavyEquipmentsListing = heavyEquipmentsListing;
        return this;
    }
    public Long statusCode;
    public GetListingHeavyEquipmentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}