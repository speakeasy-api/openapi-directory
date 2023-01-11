package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomFieldSettingForPortfolioRequest {
    public AddCustomFieldSettingForPortfolioPathParams pathParams;
    public AddCustomFieldSettingForPortfolioRequest withPathParams(AddCustomFieldSettingForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddCustomFieldSettingForPortfolioQueryParams queryParams;
    public AddCustomFieldSettingForPortfolioRequest withQueryParams(AddCustomFieldSettingForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddCustomFieldSettingForPortfolioRequestBody request;
    public AddCustomFieldSettingForPortfolioRequest withRequest(AddCustomFieldSettingForPortfolioRequestBody request) {
        this.request = request;
        return this;
    }
}