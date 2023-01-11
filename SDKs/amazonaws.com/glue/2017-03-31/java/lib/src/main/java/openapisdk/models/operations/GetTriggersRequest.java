package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTriggersRequest {
    public GetTriggersQueryParams queryParams;
    public GetTriggersRequest withQueryParams(GetTriggersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTriggersHeaders headers;
    public GetTriggersRequest withHeaders(GetTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTriggersRequest request;
    public GetTriggersRequest withRequest(openapisdk.models.shared.GetTriggersRequest request) {
        this.request = request;
        return this;
    }
}