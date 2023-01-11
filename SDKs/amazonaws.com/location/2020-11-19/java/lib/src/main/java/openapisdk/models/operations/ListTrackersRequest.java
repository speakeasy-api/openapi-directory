package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrackersRequest {
    public ListTrackersQueryParams queryParams;
    public ListTrackersRequest withQueryParams(ListTrackersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrackersHeaders headers;
    public ListTrackersRequest withHeaders(ListTrackersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListTrackersRequestBody request;
    public ListTrackersRequest withRequest(ListTrackersRequestBody request) {
        this.request = request;
        return this;
    }
}