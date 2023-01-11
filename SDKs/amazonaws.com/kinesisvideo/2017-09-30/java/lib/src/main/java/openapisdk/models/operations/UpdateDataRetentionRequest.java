package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataRetentionRequest {
    public UpdateDataRetentionHeaders headers;
    public UpdateDataRetentionRequest withHeaders(UpdateDataRetentionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDataRetentionRequestBody request;
    public UpdateDataRetentionRequest withRequest(UpdateDataRetentionRequestBody request) {
        this.request = request;
        return this;
    }
}