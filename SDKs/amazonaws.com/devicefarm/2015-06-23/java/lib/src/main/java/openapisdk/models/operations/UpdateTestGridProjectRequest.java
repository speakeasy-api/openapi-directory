package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTestGridProjectRequest {
    public UpdateTestGridProjectHeaders headers;
    public UpdateTestGridProjectRequest withHeaders(UpdateTestGridProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTestGridProjectRequest request;
    public UpdateTestGridProjectRequest withRequest(openapisdk.models.shared.UpdateTestGridProjectRequest request) {
        this.request = request;
        return this;
    }
}