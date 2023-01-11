package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryDescriptionRequest {
    public UpdateRepositoryDescriptionHeaders headers;
    public UpdateRepositoryDescriptionRequest withHeaders(UpdateRepositoryDescriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRepositoryDescriptionInput request;
    public UpdateRepositoryDescriptionRequest withRequest(openapisdk.models.shared.UpdateRepositoryDescriptionInput request) {
        this.request = request;
        return this;
    }
}