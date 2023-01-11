package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAppRequest {
    public UpdateAppHeaders headers;
    public UpdateAppRequest withHeaders(UpdateAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAppRequest request;
    public UpdateAppRequest withRequest(openapisdk.models.shared.UpdateAppRequest request) {
        this.request = request;
        return this;
    }
}