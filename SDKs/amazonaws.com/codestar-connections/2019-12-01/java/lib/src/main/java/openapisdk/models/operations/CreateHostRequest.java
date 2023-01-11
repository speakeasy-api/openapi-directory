package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHostRequest {
    public CreateHostHeaders headers;
    public CreateHostRequest withHeaders(CreateHostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHostInput request;
    public CreateHostRequest withRequest(openapisdk.models.shared.CreateHostInput request) {
        this.request = request;
        return this;
    }
}