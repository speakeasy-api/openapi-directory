package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsSuggestedFiltersRequest {
    public GetUrlsSuggestedFiltersPathParams pathParams;
    public GetUrlsSuggestedFiltersRequest withPathParams(GetUrlsSuggestedFiltersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUrlsSuggestedFiltersQueryParams queryParams;
    public GetUrlsSuggestedFiltersRequest withQueryParams(GetUrlsSuggestedFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlsAggsQuery request;
    public GetUrlsSuggestedFiltersRequest withRequest(openapisdk.models.shared.UrlsAggsQuery request) {
        this.request = request;
        return this;
    }
}