package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePermissionGroupRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.UpdatePermissionGroupRequest updatePermissionGroupRequest;
    public UpdatePermissionGroupRequests withUpdatePermissionGroupRequest(openapisdk.models.shared.UpdatePermissionGroupRequest updatePermissionGroupRequest) {
        this.updatePermissionGroupRequest = updatePermissionGroupRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePermissionGroupRequest updatePermissionGroupRequest1;
    public UpdatePermissionGroupRequests withUpdatePermissionGroupRequest1(openapisdk.models.shared.UpdatePermissionGroupRequest updatePermissionGroupRequest1) {
        this.updatePermissionGroupRequest1 = updatePermissionGroupRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.UpdatePermissionGroupRequest updatePermissionGroupRequest2;
    public UpdatePermissionGroupRequests withUpdatePermissionGroupRequest2(openapisdk.models.shared.UpdatePermissionGroupRequest updatePermissionGroupRequest2) {
        this.updatePermissionGroupRequest2 = updatePermissionGroupRequest2;
        return this;
    }
}