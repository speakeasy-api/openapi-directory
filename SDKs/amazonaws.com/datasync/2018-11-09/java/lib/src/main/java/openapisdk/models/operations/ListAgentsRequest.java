package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAgentsRequest {
    public ListAgentsQueryParams queryParams;
    public ListAgentsRequest withQueryParams(ListAgentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAgentsHeaders headers;
    public ListAgentsRequest withHeaders(ListAgentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAgentsRequest request;
    public ListAgentsRequest withRequest(openapisdk.models.shared.ListAgentsRequest request) {
        this.request = request;
        return this;
    }
}