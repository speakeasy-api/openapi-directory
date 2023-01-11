package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSimulationJobBatchesRequest {
    public ListSimulationJobBatchesQueryParams queryParams;
    public ListSimulationJobBatchesRequest withQueryParams(ListSimulationJobBatchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSimulationJobBatchesHeaders headers;
    public ListSimulationJobBatchesRequest withHeaders(ListSimulationJobBatchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListSimulationJobBatchesRequestBody request;
    public ListSimulationJobBatchesRequest withRequest(ListSimulationJobBatchesRequestBody request) {
        this.request = request;
        return this;
    }
}