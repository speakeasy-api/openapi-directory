package openapisdk.models.operations;



public class DealerSearchResponse {
    public String contentType;
    public DealerSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealersResponse dealersResponse;
    public DealerSearchResponse withDealersResponse(openapisdk.models.shared.DealersResponse dealersResponse) {
        this.dealersResponse = dealersResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DealerSearchResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DealerSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}