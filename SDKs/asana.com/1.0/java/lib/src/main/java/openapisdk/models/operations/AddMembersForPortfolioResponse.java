package openapisdk.models.operations;



public class AddMembersForPortfolioResponse {
    public String contentType;
    public AddMembersForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddMembersForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddMembersForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddMembersForPortfolio200ApplicationJson addMembersForPortfolio200ApplicationJSONObject;
    public AddMembersForPortfolioResponse withAddMembersForPortfolio200ApplicationJsonObject(AddMembersForPortfolio200ApplicationJson addMembersForPortfolio200ApplicationJSONObject) {
        this.addMembersForPortfolio200ApplicationJSONObject = addMembersForPortfolio200ApplicationJSONObject;
        return this;
    }
}