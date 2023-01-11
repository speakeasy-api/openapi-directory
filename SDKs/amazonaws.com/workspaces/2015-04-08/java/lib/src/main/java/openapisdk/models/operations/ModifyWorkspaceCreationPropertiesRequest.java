package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyWorkspaceCreationPropertiesRequest {
    public ModifyWorkspaceCreationPropertiesHeaders headers;
    public ModifyWorkspaceCreationPropertiesRequest withHeaders(ModifyWorkspaceCreationPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyWorkspaceCreationPropertiesRequest request;
    public ModifyWorkspaceCreationPropertiesRequest withRequest(openapisdk.models.shared.ModifyWorkspaceCreationPropertiesRequest request) {
        this.request = request;
        return this;
    }
}