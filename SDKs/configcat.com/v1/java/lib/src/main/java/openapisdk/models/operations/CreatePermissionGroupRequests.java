package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePermissionGroupRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CreatePermissionGroupRequest createPermissionGroupRequest;
    public CreatePermissionGroupRequests withCreatePermissionGroupRequest(openapisdk.models.shared.CreatePermissionGroupRequest createPermissionGroupRequest) {
        this.createPermissionGroupRequest = createPermissionGroupRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePermissionGroupRequest createPermissionGroupRequest1;
    public CreatePermissionGroupRequests withCreatePermissionGroupRequest1(openapisdk.models.shared.CreatePermissionGroupRequest createPermissionGroupRequest1) {
        this.createPermissionGroupRequest1 = createPermissionGroupRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreatePermissionGroupRequest createPermissionGroupRequest2;
    public CreatePermissionGroupRequests withCreatePermissionGroupRequest2(openapisdk.models.shared.CreatePermissionGroupRequest createPermissionGroupRequest2) {
        this.createPermissionGroupRequest2 = createPermissionGroupRequest2;
        return this;
    }
}