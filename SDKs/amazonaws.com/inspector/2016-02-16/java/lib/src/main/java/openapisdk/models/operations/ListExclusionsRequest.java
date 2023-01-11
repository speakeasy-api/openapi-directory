package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExclusionsRequest {
    public ListExclusionsQueryParams queryParams;
    public ListExclusionsRequest withQueryParams(ListExclusionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExclusionsHeaders headers;
    public ListExclusionsRequest withHeaders(ListExclusionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListExclusionsRequest request;
    public ListExclusionsRequest withRequest(openapisdk.models.shared.ListExclusionsRequest request) {
        this.request = request;
        return this;
    }
}