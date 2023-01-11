package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnvironmentAccountConnectionRequest {
    public GetEnvironmentAccountConnectionHeaders headers;
    public GetEnvironmentAccountConnectionRequest withHeaders(GetEnvironmentAccountConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEnvironmentAccountConnectionInput request;
    public GetEnvironmentAccountConnectionRequest withRequest(openapisdk.models.shared.GetEnvironmentAccountConnectionInput request) {
        this.request = request;
        return this;
    }
}