package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectRequest {
    public UpdateProjectHeaders headers;
    public UpdateProjectRequest withHeaders(UpdateProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProjectRequest request;
    public UpdateProjectRequest withRequest(openapisdk.models.shared.UpdateProjectRequest request) {
        this.request = request;
        return this;
    }
}