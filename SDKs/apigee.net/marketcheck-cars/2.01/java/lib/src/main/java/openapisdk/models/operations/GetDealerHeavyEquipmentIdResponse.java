package openapisdk.models.operations;



public class GetDealerHeavyEquipmentIdResponse {
    public String contentType;
    public GetDealerHeavyEquipmentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dealer dealer;
    public GetDealerHeavyEquipmentIdResponse withDealer(openapisdk.models.shared.Dealer dealer) {
        this.dealer = dealer;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDealerHeavyEquipmentIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDealerHeavyEquipmentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}