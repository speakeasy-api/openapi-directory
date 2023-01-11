package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartContentModerationRequest {
    public StartContentModerationHeaders headers;
    public StartContentModerationRequest withHeaders(StartContentModerationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartContentModerationRequest request;
    public StartContentModerationRequest withRequest(openapisdk.models.shared.StartContentModerationRequest request) {
        this.request = request;
        return this;
    }
}