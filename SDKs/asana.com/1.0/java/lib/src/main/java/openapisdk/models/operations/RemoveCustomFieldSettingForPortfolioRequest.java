package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveCustomFieldSettingForPortfolioRequest {
    public RemoveCustomFieldSettingForPortfolioPathParams pathParams;
    public RemoveCustomFieldSettingForPortfolioRequest withPathParams(RemoveCustomFieldSettingForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveCustomFieldSettingForPortfolioQueryParams queryParams;
    public RemoveCustomFieldSettingForPortfolioRequest withQueryParams(RemoveCustomFieldSettingForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveCustomFieldSettingForPortfolioRequestBody request;
    public RemoveCustomFieldSettingForPortfolioRequest withRequest(RemoveCustomFieldSettingForPortfolioRequestBody request) {
        this.request = request;
        return this;
    }
}