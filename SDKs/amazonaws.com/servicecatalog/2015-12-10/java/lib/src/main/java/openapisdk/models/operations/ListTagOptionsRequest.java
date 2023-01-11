package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagOptionsRequest {
    public ListTagOptionsQueryParams queryParams;
    public ListTagOptionsRequest withQueryParams(ListTagOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTagOptionsHeaders headers;
    public ListTagOptionsRequest withHeaders(ListTagOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagOptionsInput request;
    public ListTagOptionsRequest withRequest(openapisdk.models.shared.ListTagOptionsInput request) {
        this.request = request;
        return this;
    }
}