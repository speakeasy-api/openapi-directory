package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnvironmentsRequest {
    public ListEnvironmentsQueryParams queryParams;
    public ListEnvironmentsRequest withQueryParams(ListEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEnvironmentsHeaders headers;
    public ListEnvironmentsRequest withHeaders(ListEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEnvironmentsInput request;
    public ListEnvironmentsRequest withRequest(openapisdk.models.shared.ListEnvironmentsInput request) {
        this.request = request;
        return this;
    }
}