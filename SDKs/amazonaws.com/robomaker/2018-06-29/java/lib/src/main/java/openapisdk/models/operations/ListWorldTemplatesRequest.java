package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorldTemplatesRequest {
    public ListWorldTemplatesQueryParams queryParams;
    public ListWorldTemplatesRequest withQueryParams(ListWorldTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorldTemplatesHeaders headers;
    public ListWorldTemplatesRequest withHeaders(ListWorldTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListWorldTemplatesRequestBody request;
    public ListWorldTemplatesRequest withRequest(ListWorldTemplatesRequestBody request) {
        this.request = request;
        return this;
    }
}