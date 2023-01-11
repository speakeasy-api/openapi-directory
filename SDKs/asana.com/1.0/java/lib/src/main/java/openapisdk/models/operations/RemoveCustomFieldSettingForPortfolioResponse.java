package openapisdk.models.operations;



public class RemoveCustomFieldSettingForPortfolioResponse {
    public String contentType;
    public RemoveCustomFieldSettingForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveCustomFieldSettingForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveCustomFieldSettingForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveCustomFieldSettingForPortfolio200ApplicationJson removeCustomFieldSettingForPortfolio200ApplicationJSONObject;
    public RemoveCustomFieldSettingForPortfolioResponse withRemoveCustomFieldSettingForPortfolio200ApplicationJsonObject(RemoveCustomFieldSettingForPortfolio200ApplicationJson removeCustomFieldSettingForPortfolio200ApplicationJSONObject) {
        this.removeCustomFieldSettingForPortfolio200ApplicationJSONObject = removeCustomFieldSettingForPortfolio200ApplicationJSONObject;
        return this;
    }
}