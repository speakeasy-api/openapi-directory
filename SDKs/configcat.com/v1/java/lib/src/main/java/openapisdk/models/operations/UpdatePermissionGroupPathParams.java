package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePermissionGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissionGroupId")
    public Long permissionGroupId;
    public UpdatePermissionGroupPathParams withPermissionGroupId(Long permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}