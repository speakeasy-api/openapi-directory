package openapisdk.models.operations;



public class UpdatePortfolioResponse {
    public String contentType;
    public UpdatePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdatePortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdatePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdatePortfolio200ApplicationJson updatePortfolio200ApplicationJSONObject;
    public UpdatePortfolioResponse withUpdatePortfolio200ApplicationJsonObject(UpdatePortfolio200ApplicationJson updatePortfolio200ApplicationJSONObject) {
        this.updatePortfolio200ApplicationJSONObject = updatePortfolio200ApplicationJSONObject;
        return this;
    }
}