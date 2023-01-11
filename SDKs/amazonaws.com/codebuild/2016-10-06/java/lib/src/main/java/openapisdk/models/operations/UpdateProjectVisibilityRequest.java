package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectVisibilityRequest {
    public UpdateProjectVisibilityHeaders headers;
    public UpdateProjectVisibilityRequest withHeaders(UpdateProjectVisibilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProjectVisibilityInput request;
    public UpdateProjectVisibilityRequest withRequest(openapisdk.models.shared.UpdateProjectVisibilityInput request) {
        this.request = request;
        return this;
    }
}