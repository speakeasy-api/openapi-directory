package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterWorkspaceDirectoryRequest {
    public RegisterWorkspaceDirectoryHeaders headers;
    public RegisterWorkspaceDirectoryRequest withHeaders(RegisterWorkspaceDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterWorkspaceDirectoryRequest request;
    public RegisterWorkspaceDirectoryRequest withRequest(openapisdk.models.shared.RegisterWorkspaceDirectoryRequest request) {
        this.request = request;
        return this;
    }
}