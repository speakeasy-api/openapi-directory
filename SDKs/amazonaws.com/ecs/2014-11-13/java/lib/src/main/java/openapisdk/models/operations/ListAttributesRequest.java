package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAttributesRequest {
    public ListAttributesQueryParams queryParams;
    public ListAttributesRequest withQueryParams(ListAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAttributesHeaders headers;
    public ListAttributesRequest withHeaders(ListAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAttributesRequest request;
    public ListAttributesRequest withRequest(openapisdk.models.shared.ListAttributesRequest request) {
        this.request = request;
        return this;
    }
}