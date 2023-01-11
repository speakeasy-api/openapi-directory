package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentAccountConnectionRequest {
    public UpdateEnvironmentAccountConnectionHeaders headers;
    public UpdateEnvironmentAccountConnectionRequest withHeaders(UpdateEnvironmentAccountConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentAccountConnectionInput request;
    public UpdateEnvironmentAccountConnectionRequest withRequest(openapisdk.models.shared.UpdateEnvironmentAccountConnectionInput request) {
        this.request = request;
        return this;
    }
}