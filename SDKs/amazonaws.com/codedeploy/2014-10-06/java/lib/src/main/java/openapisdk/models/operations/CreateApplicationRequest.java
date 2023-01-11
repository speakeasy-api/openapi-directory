package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationRequest {
    public CreateApplicationHeaders headers;
    public CreateApplicationRequest withHeaders(CreateApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateApplicationInput request;
    public CreateApplicationRequest withRequest(openapisdk.models.shared.CreateApplicationInput request) {
        this.request = request;
        return this;
    }
}