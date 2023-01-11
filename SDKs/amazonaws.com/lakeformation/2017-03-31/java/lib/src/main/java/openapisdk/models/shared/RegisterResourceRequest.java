package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public RegisterResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public RegisterResourceRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseServiceLinkedRole")
    public Boolean useServiceLinkedRole;
    public RegisterResourceRequest withUseServiceLinkedRole(Boolean useServiceLinkedRole) {
        this.useServiceLinkedRole = useServiceLinkedRole;
        return this;
    }
}