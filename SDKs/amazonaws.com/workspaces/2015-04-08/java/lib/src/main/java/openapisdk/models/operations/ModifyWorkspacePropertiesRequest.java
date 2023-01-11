package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyWorkspacePropertiesRequest {
    public ModifyWorkspacePropertiesHeaders headers;
    public ModifyWorkspacePropertiesRequest withHeaders(ModifyWorkspacePropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyWorkspacePropertiesRequest request;
    public ModifyWorkspacePropertiesRequest withRequest(openapisdk.models.shared.ModifyWorkspacePropertiesRequest request) {
        this.request = request;
        return this;
    }
}