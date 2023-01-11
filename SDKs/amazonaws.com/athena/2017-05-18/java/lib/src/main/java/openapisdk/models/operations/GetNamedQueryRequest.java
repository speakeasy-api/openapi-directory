package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamedQueryRequest {
    public GetNamedQueryHeaders headers;
    public GetNamedQueryRequest withHeaders(GetNamedQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetNamedQueryInput request;
    public GetNamedQueryRequest withRequest(openapisdk.models.shared.GetNamedQueryInput request) {
        this.request = request;
        return this;
    }
}