package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentAccountConnectionRequest {
    public DeleteEnvironmentAccountConnectionHeaders headers;
    public DeleteEnvironmentAccountConnectionRequest withHeaders(DeleteEnvironmentAccountConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEnvironmentAccountConnectionInput request;
    public DeleteEnvironmentAccountConnectionRequest withRequest(openapisdk.models.shared.DeleteEnvironmentAccountConnectionInput request) {
        this.request = request;
        return this;
    }
}