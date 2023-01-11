package openapisdk.models.operations;



public class PostGetCostEstimateResponse {
    public String contentType;
    public PostGetCostEstimateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object costEstimateResponse;
    public PostGetCostEstimateResponse withCostEstimateResponse(Object costEstimateResponse) {
        this.costEstimateResponse = costEstimateResponse;
        return this;
    }
    public Object serviceError;
    public PostGetCostEstimateResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostGetCostEstimateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}