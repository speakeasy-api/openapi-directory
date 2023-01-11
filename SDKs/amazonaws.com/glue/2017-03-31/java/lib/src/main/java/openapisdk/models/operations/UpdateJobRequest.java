package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJobRequest {
    public UpdateJobHeaders headers;
    public UpdateJobRequest withHeaders(UpdateJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateJobRequest request;
    public UpdateJobRequest withRequest(openapisdk.models.shared.UpdateJobRequest request) {
        this.request = request;
        return this;
    }
}