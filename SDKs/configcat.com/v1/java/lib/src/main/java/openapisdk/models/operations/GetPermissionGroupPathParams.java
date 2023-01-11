package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissionGroupId")
    public Long permissionGroupId;
    public GetPermissionGroupPathParams withPermissionGroupId(Long permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}