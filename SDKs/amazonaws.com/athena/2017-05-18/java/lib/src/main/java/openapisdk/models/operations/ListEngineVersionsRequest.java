package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEngineVersionsRequest {
    public ListEngineVersionsHeaders headers;
    public ListEngineVersionsRequest withHeaders(ListEngineVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEngineVersionsInput request;
    public ListEngineVersionsRequest withRequest(openapisdk.models.shared.ListEngineVersionsInput request) {
        this.request = request;
        return this;
    }
}