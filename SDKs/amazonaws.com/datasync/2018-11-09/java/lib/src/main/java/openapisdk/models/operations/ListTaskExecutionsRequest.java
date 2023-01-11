package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskExecutionsRequest {
    public ListTaskExecutionsQueryParams queryParams;
    public ListTaskExecutionsRequest withQueryParams(ListTaskExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskExecutionsHeaders headers;
    public ListTaskExecutionsRequest withHeaders(ListTaskExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTaskExecutionsRequest request;
    public ListTaskExecutionsRequest withRequest(openapisdk.models.shared.ListTaskExecutionsRequest request) {
        this.request = request;
        return this;
    }
}