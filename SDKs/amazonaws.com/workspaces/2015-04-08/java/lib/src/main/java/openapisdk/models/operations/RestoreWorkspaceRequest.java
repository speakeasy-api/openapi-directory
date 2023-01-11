package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreWorkspaceRequest {
    public RestoreWorkspaceHeaders headers;
    public RestoreWorkspaceRequest withHeaders(RestoreWorkspaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreWorkspaceRequest request;
    public RestoreWorkspaceRequest withRequest(openapisdk.models.shared.RestoreWorkspaceRequest request) {
        this.request = request;
        return this;
    }
}