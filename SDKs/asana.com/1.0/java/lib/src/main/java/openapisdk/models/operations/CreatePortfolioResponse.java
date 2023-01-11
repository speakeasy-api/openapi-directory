package openapisdk.models.operations;



public class CreatePortfolioResponse {
    public String contentType;
    public CreatePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreatePortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreatePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreatePortfolio201ApplicationJson createPortfolio201ApplicationJSONObject;
    public CreatePortfolioResponse withCreatePortfolio201ApplicationJsonObject(CreatePortfolio201ApplicationJson createPortfolio201ApplicationJSONObject) {
        this.createPortfolio201ApplicationJSONObject = createPortfolio201ApplicationJSONObject;
        return this;
    }
}