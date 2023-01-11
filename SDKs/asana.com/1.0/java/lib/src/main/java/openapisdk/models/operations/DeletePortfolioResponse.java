package openapisdk.models.operations;



public class DeletePortfolioResponse {
    public String contentType;
    public DeletePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeletePortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeletePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeletePortfolio200ApplicationJson deletePortfolio200ApplicationJSONObject;
    public DeletePortfolioResponse withDeletePortfolio200ApplicationJsonObject(DeletePortfolio200ApplicationJson deletePortfolio200ApplicationJSONObject) {
        this.deletePortfolio200ApplicationJSONObject = deletePortfolio200ApplicationJSONObject;
        return this;
    }
}