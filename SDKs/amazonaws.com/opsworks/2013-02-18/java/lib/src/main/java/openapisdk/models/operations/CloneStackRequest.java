package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloneStackRequest {
    public CloneStackHeaders headers;
    public CloneStackRequest withHeaders(CloneStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CloneStackRequest request;
    public CloneStackRequest withRequest(openapisdk.models.shared.CloneStackRequest request) {
        this.request = request;
        return this;
    }
}