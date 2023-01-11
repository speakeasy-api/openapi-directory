package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyWorkspaceAccessPropertiesRequest {
    public ModifyWorkspaceAccessPropertiesHeaders headers;
    public ModifyWorkspaceAccessPropertiesRequest withHeaders(ModifyWorkspaceAccessPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyWorkspaceAccessPropertiesRequest request;
    public ModifyWorkspaceAccessPropertiesRequest withRequest(openapisdk.models.shared.ModifyWorkspaceAccessPropertiesRequest request) {
        this.request = request;
        return this;
    }
}