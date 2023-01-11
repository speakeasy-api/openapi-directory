package openapisdk.models.operations;



public class GetCustomFieldSettingsForPortfolioResponse {
    public String contentType;
    public GetCustomFieldSettingsForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCustomFieldSettingsForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetCustomFieldSettingsForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomFieldSettingsForPortfolio200ApplicationJson getCustomFieldSettingsForPortfolio200ApplicationJSONObject;
    public GetCustomFieldSettingsForPortfolioResponse withGetCustomFieldSettingsForPortfolio200ApplicationJsonObject(GetCustomFieldSettingsForPortfolio200ApplicationJson getCustomFieldSettingsForPortfolio200ApplicationJSONObject) {
        this.getCustomFieldSettingsForPortfolio200ApplicationJSONObject = getCustomFieldSettingsForPortfolio200ApplicationJSONObject;
        return this;
    }
}