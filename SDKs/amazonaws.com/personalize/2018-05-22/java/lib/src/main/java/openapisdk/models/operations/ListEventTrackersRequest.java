package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventTrackersRequest {
    public ListEventTrackersQueryParams queryParams;
    public ListEventTrackersRequest withQueryParams(ListEventTrackersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventTrackersHeaders headers;
    public ListEventTrackersRequest withHeaders(ListEventTrackersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEventTrackersRequest request;
    public ListEventTrackersRequest withRequest(openapisdk.models.shared.ListEventTrackersRequest request) {
        this.request = request;
        return this;
    }
}