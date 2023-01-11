package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActivityRequest {
    public CreateActivityHeaders headers;
    public CreateActivityRequest withHeaders(CreateActivityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateActivityInput request;
    public CreateActivityRequest withRequest(openapisdk.models.shared.CreateActivityInput request) {
        this.request = request;
        return this;
    }
}