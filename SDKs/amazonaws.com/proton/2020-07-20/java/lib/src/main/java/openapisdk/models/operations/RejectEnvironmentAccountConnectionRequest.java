package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectEnvironmentAccountConnectionRequest {
    public RejectEnvironmentAccountConnectionHeaders headers;
    public RejectEnvironmentAccountConnectionRequest withHeaders(RejectEnvironmentAccountConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectEnvironmentAccountConnectionInput request;
    public RejectEnvironmentAccountConnectionRequest withRequest(openapisdk.models.shared.RejectEnvironmentAccountConnectionInput request) {
        this.request = request;
        return this;
    }
}