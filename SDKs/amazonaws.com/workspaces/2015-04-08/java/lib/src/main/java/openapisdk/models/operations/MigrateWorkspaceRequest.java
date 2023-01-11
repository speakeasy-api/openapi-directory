package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrateWorkspaceRequest {
    public MigrateWorkspaceHeaders headers;
    public MigrateWorkspaceRequest withHeaders(MigrateWorkspaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MigrateWorkspaceRequest request;
    public MigrateWorkspaceRequest withRequest(openapisdk.models.shared.MigrateWorkspaceRequest request) {
        this.request = request;
        return this;
    }
}