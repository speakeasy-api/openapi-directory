package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChangeSetsRequest {
    public ListChangeSetsQueryParams queryParams;
    public ListChangeSetsRequest withQueryParams(ListChangeSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChangeSetsHeaders headers;
    public ListChangeSetsRequest withHeaders(ListChangeSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListChangeSetsRequestBody request;
    public ListChangeSetsRequest withRequest(ListChangeSetsRequestBody request) {
        this.request = request;
        return this;
    }
}