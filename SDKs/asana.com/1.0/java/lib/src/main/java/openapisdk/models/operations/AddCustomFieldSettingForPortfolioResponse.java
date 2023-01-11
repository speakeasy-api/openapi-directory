package openapisdk.models.operations;



public class AddCustomFieldSettingForPortfolioResponse {
    public String contentType;
    public AddCustomFieldSettingForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddCustomFieldSettingForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddCustomFieldSettingForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddCustomFieldSettingForPortfolio200ApplicationJson addCustomFieldSettingForPortfolio200ApplicationJSONObject;
    public AddCustomFieldSettingForPortfolioResponse withAddCustomFieldSettingForPortfolio200ApplicationJsonObject(AddCustomFieldSettingForPortfolio200ApplicationJson addCustomFieldSettingForPortfolio200ApplicationJSONObject) {
        this.addCustomFieldSettingForPortfolio200ApplicationJSONObject = addCustomFieldSettingForPortfolio200ApplicationJSONObject;
        return this;
    }
}