package openapisdk.models.operations;



public class RemoveMembersForPortfolioResponse {
    public String contentType;
    public RemoveMembersForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveMembersForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveMembersForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveMembersForPortfolio200ApplicationJson removeMembersForPortfolio200ApplicationJSONObject;
    public RemoveMembersForPortfolioResponse withRemoveMembersForPortfolio200ApplicationJsonObject(RemoveMembersForPortfolio200ApplicationJson removeMembersForPortfolio200ApplicationJSONObject) {
        this.removeMembersForPortfolio200ApplicationJSONObject = removeMembersForPortfolio200ApplicationJSONObject;
        return this;
    }
}