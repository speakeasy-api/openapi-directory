package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvisionPermissionSetRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public ProvisionPermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public ProvisionPermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetId")
    public String targetId;
    public ProvisionPermissionSetRequest withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonProperty("TargetType")
    public ProvisionTargetTypeEnum targetType;
    public ProvisionPermissionSetRequest withTargetType(ProvisionTargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}