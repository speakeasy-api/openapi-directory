package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBudgetsForResourceRequest {
    public ListBudgetsForResourceQueryParams queryParams;
    public ListBudgetsForResourceRequest withQueryParams(ListBudgetsForResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBudgetsForResourceHeaders headers;
    public ListBudgetsForResourceRequest withHeaders(ListBudgetsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBudgetsForResourceInput request;
    public ListBudgetsForResourceRequest withRequest(openapisdk.models.shared.ListBudgetsForResourceInput request) {
        this.request = request;
        return this;
    }
}