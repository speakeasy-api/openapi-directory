package openapisdk.models.operations;



public class AddItemForPortfolioResponse {
    public String contentType;
    public AddItemForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddItemForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddItemForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddItemForPortfolio200ApplicationJson addItemForPortfolio200ApplicationJSONObject;
    public AddItemForPortfolioResponse withAddItemForPortfolio200ApplicationJsonObject(AddItemForPortfolio200ApplicationJson addItemForPortfolio200ApplicationJSONObject) {
        this.addItemForPortfolio200ApplicationJSONObject = addItemForPortfolio200ApplicationJSONObject;
        return this;
    }
}