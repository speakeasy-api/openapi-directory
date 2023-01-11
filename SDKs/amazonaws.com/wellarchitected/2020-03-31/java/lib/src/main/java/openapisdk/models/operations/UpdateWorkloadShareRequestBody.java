package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateWorkloadShareRequestBody {
    @JsonProperty("PermissionType")
    public UpdateWorkloadShareRequestBodyPermissionTypeEnum permissionType;
    public UpdateWorkloadShareRequestBody withPermissionType(UpdateWorkloadShareRequestBodyPermissionTypeEnum permissionType) {
        this.permissionType = permissionType;
        return this;
    }
}