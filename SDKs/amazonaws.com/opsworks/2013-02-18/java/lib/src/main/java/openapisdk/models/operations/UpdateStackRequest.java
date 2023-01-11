package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStackRequest {
    public UpdateStackHeaders headers;
    public UpdateStackRequest withHeaders(UpdateStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateStackRequest request;
    public UpdateStackRequest withRequest(openapisdk.models.shared.UpdateStackRequest request) {
        this.request = request;
        return this;
    }
}