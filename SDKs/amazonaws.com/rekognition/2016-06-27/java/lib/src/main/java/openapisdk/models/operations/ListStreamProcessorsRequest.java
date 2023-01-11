package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamProcessorsRequest {
    public ListStreamProcessorsQueryParams queryParams;
    public ListStreamProcessorsRequest withQueryParams(ListStreamProcessorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStreamProcessorsHeaders headers;
    public ListStreamProcessorsRequest withHeaders(ListStreamProcessorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListStreamProcessorsRequest request;
    public ListStreamProcessorsRequest withRequest(openapisdk.models.shared.ListStreamProcessorsRequest request) {
        this.request = request;
        return this;
    }
}