package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionAliasPermissionRequest {
    public UpdateConnectionAliasPermissionHeaders headers;
    public UpdateConnectionAliasPermissionRequest withHeaders(UpdateConnectionAliasPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateConnectionAliasPermissionRequest request;
    public UpdateConnectionAliasPermissionRequest withRequest(openapisdk.models.shared.UpdateConnectionAliasPermissionRequest request) {
        this.request = request;
        return this;
    }
}