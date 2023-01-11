package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTerminologiesRequest {
    public ListTerminologiesQueryParams queryParams;
    public ListTerminologiesRequest withQueryParams(ListTerminologiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTerminologiesHeaders headers;
    public ListTerminologiesRequest withHeaders(ListTerminologiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTerminologiesRequest request;
    public ListTerminologiesRequest withRequest(openapisdk.models.shared.ListTerminologiesRequest request) {
        this.request = request;
        return this;
    }
}