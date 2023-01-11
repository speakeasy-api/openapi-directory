package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWorkloadShareRequestBody {
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateWorkloadShareRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("PermissionType")
    public CreateWorkloadShareRequestBodyPermissionTypeEnum permissionType;
    public CreateWorkloadShareRequestBody withPermissionType(CreateWorkloadShareRequestBodyPermissionTypeEnum permissionType) {
        this.permissionType = permissionType;
        return this;
    }
    @JsonProperty("SharedWith")
    public String sharedWith;
    public CreateWorkloadShareRequestBody withSharedWith(String sharedWith) {
        this.sharedWith = sharedWith;
        return this;
    }
}