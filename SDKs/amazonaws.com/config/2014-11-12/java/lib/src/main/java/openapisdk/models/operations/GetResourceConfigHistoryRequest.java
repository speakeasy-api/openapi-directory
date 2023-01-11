package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceConfigHistoryRequest {
    public GetResourceConfigHistoryQueryParams queryParams;
    public GetResourceConfigHistoryRequest withQueryParams(GetResourceConfigHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourceConfigHistoryHeaders headers;
    public GetResourceConfigHistoryRequest withHeaders(GetResourceConfigHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResourceConfigHistoryRequest request;
    public GetResourceConfigHistoryRequest withRequest(openapisdk.models.shared.GetResourceConfigHistoryRequest request) {
        this.request = request;
        return this;
    }
}