package openapisdk.models.operations;



public class GetDealersRvResponse {
    public String contentType;
    public GetDealersRvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealersResponse dealersResponse;
    public GetDealersRvResponse withDealersResponse(openapisdk.models.shared.DealersResponse dealersResponse) {
        this.dealersResponse = dealersResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDealersRvResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDealersRvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}