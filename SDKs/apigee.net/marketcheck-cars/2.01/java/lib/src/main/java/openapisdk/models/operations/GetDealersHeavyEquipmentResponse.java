package openapisdk.models.operations;



public class GetDealersHeavyEquipmentResponse {
    public String contentType;
    public GetDealersHeavyEquipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealersResponse dealersResponse;
    public GetDealersHeavyEquipmentResponse withDealersResponse(openapisdk.models.shared.DealersResponse dealersResponse) {
        this.dealersResponse = dealersResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDealersHeavyEquipmentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDealersHeavyEquipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}