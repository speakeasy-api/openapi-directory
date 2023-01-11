package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagProjectRequest {
    public UntagProjectHeaders headers;
    public UntagProjectRequest withHeaders(UntagProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagProjectRequest request;
    public UntagProjectRequest withRequest(openapisdk.models.shared.UntagProjectRequest request) {
        this.request = request;
        return this;
    }
}