package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyProductRequest {
    public CopyProductHeaders headers;
    public CopyProductRequest withHeaders(CopyProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyProductInput request;
    public CopyProductRequest withRequest(openapisdk.models.shared.CopyProductInput request) {
        this.request = request;
        return this;
    }
}