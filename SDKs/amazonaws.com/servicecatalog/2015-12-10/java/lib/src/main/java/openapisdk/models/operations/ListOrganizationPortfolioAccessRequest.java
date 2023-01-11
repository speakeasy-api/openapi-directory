package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOrganizationPortfolioAccessRequest {
    public ListOrganizationPortfolioAccessQueryParams queryParams;
    public ListOrganizationPortfolioAccessRequest withQueryParams(ListOrganizationPortfolioAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOrganizationPortfolioAccessHeaders headers;
    public ListOrganizationPortfolioAccessRequest withHeaders(ListOrganizationPortfolioAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOrganizationPortfolioAccessInput request;
    public ListOrganizationPortfolioAccessRequest withRequest(openapisdk.models.shared.ListOrganizationPortfolioAccessInput request) {
        this.request = request;
        return this;
    }
}