package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentAccountConnectionRequest {
    public CreateEnvironmentAccountConnectionHeaders headers;
    public CreateEnvironmentAccountConnectionRequest withHeaders(CreateEnvironmentAccountConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentAccountConnectionInput request;
    public CreateEnvironmentAccountConnectionRequest withRequest(openapisdk.models.shared.CreateEnvironmentAccountConnectionInput request) {
        this.request = request;
        return this;
    }
}