package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterWorkspaceDirectoryRequest {
    public DeregisterWorkspaceDirectoryHeaders headers;
    public DeregisterWorkspaceDirectoryRequest withHeaders(DeregisterWorkspaceDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterWorkspaceDirectoryRequest request;
    public DeregisterWorkspaceDirectoryRequest withRequest(openapisdk.models.shared.DeregisterWorkspaceDirectoryRequest request) {
        this.request = request;
        return this;
    }
}