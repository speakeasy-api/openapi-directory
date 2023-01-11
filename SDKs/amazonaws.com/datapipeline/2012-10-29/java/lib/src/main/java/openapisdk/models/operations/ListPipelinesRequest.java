package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPipelinesRequest {
    public ListPipelinesQueryParams queryParams;
    public ListPipelinesRequest withQueryParams(ListPipelinesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPipelinesHeaders headers;
    public ListPipelinesRequest withHeaders(ListPipelinesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPipelinesInput request;
    public ListPipelinesRequest withRequest(openapisdk.models.shared.ListPipelinesInput request) {
        this.request = request;
        return this;
    }
}