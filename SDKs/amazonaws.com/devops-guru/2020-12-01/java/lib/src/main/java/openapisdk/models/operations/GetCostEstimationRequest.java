package openapisdk.models.operations;



public class GetCostEstimationRequest {
    public GetCostEstimationQueryParams queryParams;
    public GetCostEstimationRequest withQueryParams(GetCostEstimationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCostEstimationHeaders headers;
    public GetCostEstimationRequest withHeaders(GetCostEstimationHeaders headers) {
        this.headers = headers;
        return this;
    }
}