package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationStatesRequest {
    public ListApplicationStatesQueryParams queryParams;
    public ListApplicationStatesRequest withQueryParams(ListApplicationStatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApplicationStatesHeaders headers;
    public ListApplicationStatesRequest withHeaders(ListApplicationStatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApplicationStatesRequest request;
    public ListApplicationStatesRequest withRequest(openapisdk.models.shared.ListApplicationStatesRequest request) {
        this.request = request;
        return this;
    }
}