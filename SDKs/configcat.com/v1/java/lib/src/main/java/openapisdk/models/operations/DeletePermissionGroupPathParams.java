package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissionGroupId")
    public Long permissionGroupId;
    public DeletePermissionGroupPathParams withPermissionGroupId(Long permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}