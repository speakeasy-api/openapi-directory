package openapisdk.models.operations;



public class GetSearchHeavyEquipmentActiveResponse {
    public String contentType;
    public GetSearchHeavyEquipmentActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchHeavyEquipmentActiveResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.HeavyEquipmentsSearchResponse heavyEquipmentsSearchResponse;
    public GetSearchHeavyEquipmentActiveResponse withHeavyEquipmentsSearchResponse(openapisdk.models.shared.HeavyEquipmentsSearchResponse heavyEquipmentsSearchResponse) {
        this.heavyEquipmentsSearchResponse = heavyEquipmentsSearchResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchHeavyEquipmentActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}