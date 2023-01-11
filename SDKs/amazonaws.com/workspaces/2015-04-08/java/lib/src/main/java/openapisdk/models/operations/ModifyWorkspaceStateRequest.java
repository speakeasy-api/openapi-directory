package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyWorkspaceStateRequest {
    public ModifyWorkspaceStateHeaders headers;
    public ModifyWorkspaceStateRequest withHeaders(ModifyWorkspaceStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyWorkspaceStateRequest request;
    public ModifyWorkspaceStateRequest withRequest(openapisdk.models.shared.ModifyWorkspaceStateRequest request) {
        this.request = request;
        return this;
    }
}