package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssociatedRoleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedAt")
    public String associatedAt;
    public GetAssociatedRoleResponse withAssociatedAt(String associatedAt) {
        this.associatedAt = associatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public GetAssociatedRoleResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}