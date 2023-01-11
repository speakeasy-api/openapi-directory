package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResponsePlansRequest {
    public ListResponsePlansQueryParams queryParams;
    public ListResponsePlansRequest withQueryParams(ListResponsePlansQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResponsePlansHeaders headers;
    public ListResponsePlansRequest withHeaders(ListResponsePlansHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListResponsePlansRequestBody request;
    public ListResponsePlansRequest withRequest(ListResponsePlansRequestBody request) {
        this.request = request;
        return this;
    }
}