package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLfTagRequest {
    public UpdateLfTagHeaders headers;
    public UpdateLfTagRequest withHeaders(UpdateLfTagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLfTagRequest request;
    public UpdateLfTagRequest withRequest(openapisdk.models.shared.UpdateLfTagRequest request) {
        this.request = request;
        return this;
    }
}