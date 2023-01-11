package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClassifiersRequest {
    public GetClassifiersQueryParams queryParams;
    public GetClassifiersRequest withQueryParams(GetClassifiersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetClassifiersHeaders headers;
    public GetClassifiersRequest withHeaders(GetClassifiersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetClassifiersRequest request;
    public GetClassifiersRequest withRequest(openapisdk.models.shared.GetClassifiersRequest request) {
        this.request = request;
        return this;
    }
}