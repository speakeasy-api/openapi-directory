package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccessRequest {
    public UpdateAccessHeaders headers;
    public UpdateAccessRequest withHeaders(UpdateAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAccessRequest request;
    public UpdateAccessRequest withRequest(openapisdk.models.shared.UpdateAccessRequest request) {
        this.request = request;
        return this;
    }
}