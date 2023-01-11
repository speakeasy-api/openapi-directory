package openapisdk.models.operations;



public class RemoveItemForPortfolioResponse {
    public String contentType;
    public RemoveItemForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveItemForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveItemForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveItemForPortfolio200ApplicationJson removeItemForPortfolio200ApplicationJSONObject;
    public RemoveItemForPortfolioResponse withRemoveItemForPortfolio200ApplicationJsonObject(RemoveItemForPortfolio200ApplicationJson removeItemForPortfolio200ApplicationJSONObject) {
        this.removeItemForPortfolio200ApplicationJSONObject = removeItemForPortfolio200ApplicationJSONObject;
        return this;
    }
}