package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListScriptsRequest {
    public ListScriptsQueryParams queryParams;
    public ListScriptsRequest withQueryParams(ListScriptsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListScriptsHeaders headers;
    public ListScriptsRequest withHeaders(ListScriptsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListScriptsInput request;
    public ListScriptsRequest withRequest(openapisdk.models.shared.ListScriptsInput request) {
        this.request = request;
        return this;
    }
}