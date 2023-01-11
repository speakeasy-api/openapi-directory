package openapisdk.models.operations;



public class GetDealersMotorcycleResponse {
    public String contentType;
    public GetDealersMotorcycleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealersResponse dealersResponse;
    public GetDealersMotorcycleResponse withDealersResponse(openapisdk.models.shared.DealersResponse dealersResponse) {
        this.dealersResponse = dealersResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDealersMotorcycleResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDealersMotorcycleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}