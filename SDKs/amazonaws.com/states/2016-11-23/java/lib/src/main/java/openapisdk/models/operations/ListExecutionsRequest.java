package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExecutionsRequest {
    public ListExecutionsQueryParams queryParams;
    public ListExecutionsRequest withQueryParams(ListExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExecutionsHeaders headers;
    public ListExecutionsRequest withHeaders(ListExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListExecutionsInput request;
    public ListExecutionsRequest withRequest(openapisdk.models.shared.ListExecutionsInput request) {
        this.request = request;
        return this;
    }
}