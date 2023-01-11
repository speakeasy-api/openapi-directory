package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCollectionsRequest {
    public ListCollectionsQueryParams queryParams;
    public ListCollectionsRequest withQueryParams(ListCollectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCollectionsHeaders headers;
    public ListCollectionsRequest withHeaders(ListCollectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCollectionsRequest request;
    public ListCollectionsRequest withRequest(openapisdk.models.shared.ListCollectionsRequest request) {
        this.request = request;
        return this;
    }
}