package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationRequest {
    public UpdateApplicationHeaders headers;
    public UpdateApplicationRequest withHeaders(UpdateApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateApplicationRequest request;
    public UpdateApplicationRequest withRequest(openapisdk.models.shared.UpdateApplicationRequest request) {
        this.request = request;
        return this;
    }
}