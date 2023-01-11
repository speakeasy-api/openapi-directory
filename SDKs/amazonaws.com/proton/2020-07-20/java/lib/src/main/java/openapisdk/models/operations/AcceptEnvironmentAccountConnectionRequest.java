package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptEnvironmentAccountConnectionRequest {
    public AcceptEnvironmentAccountConnectionHeaders headers;
    public AcceptEnvironmentAccountConnectionRequest withHeaders(AcceptEnvironmentAccountConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptEnvironmentAccountConnectionInput request;
    public AcceptEnvironmentAccountConnectionRequest withRequest(openapisdk.models.shared.AcceptEnvironmentAccountConnectionInput request) {
        this.request = request;
        return this;
    }
}