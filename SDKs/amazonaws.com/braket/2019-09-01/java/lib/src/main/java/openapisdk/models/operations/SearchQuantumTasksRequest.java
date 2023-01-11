package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchQuantumTasksRequest {
    public SearchQuantumTasksQueryParams queryParams;
    public SearchQuantumTasksRequest withQueryParams(SearchQuantumTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchQuantumTasksHeaders headers;
    public SearchQuantumTasksRequest withHeaders(SearchQuantumTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchQuantumTasksRequestBody request;
    public SearchQuantumTasksRequest withRequest(SearchQuantumTasksRequestBody request) {
        this.request = request;
        return this;
    }
}