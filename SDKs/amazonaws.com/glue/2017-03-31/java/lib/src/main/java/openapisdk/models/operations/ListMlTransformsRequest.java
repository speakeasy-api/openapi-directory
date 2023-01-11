package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMlTransformsRequest {
    public ListMlTransformsQueryParams queryParams;
    public ListMlTransformsRequest withQueryParams(ListMlTransformsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMlTransformsHeaders headers;
    public ListMlTransformsRequest withHeaders(ListMlTransformsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMlTransformsRequest request;
    public ListMlTransformsRequest withRequest(openapisdk.models.shared.ListMlTransformsRequest request) {
        this.request = request;
        return this;
    }
}