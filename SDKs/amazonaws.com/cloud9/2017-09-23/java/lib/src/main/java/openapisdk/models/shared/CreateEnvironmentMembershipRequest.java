package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentMembershipRequest {
    @JsonProperty("environmentId")
    public String environmentId;
    public CreateEnvironmentMembershipRequest withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonProperty("permissions")
    public MemberPermissionsEnum permissions;
    public CreateEnvironmentMembershipRequest withPermissions(MemberPermissionsEnum permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public CreateEnvironmentMembershipRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}