package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceShareRequest {
    public UpdateResourceShareHeaders headers;
    public UpdateResourceShareRequest withHeaders(UpdateResourceShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateResourceShareRequestBody request;
    public UpdateResourceShareRequest withRequest(UpdateResourceShareRequestBody request) {
        this.request = request;
        return this;
    }
}