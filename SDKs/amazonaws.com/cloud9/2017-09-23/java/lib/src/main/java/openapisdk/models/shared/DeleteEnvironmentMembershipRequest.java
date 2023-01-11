package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEnvironmentMembershipRequest {
    @JsonProperty("environmentId")
    public String environmentId;
    public DeleteEnvironmentMembershipRequest withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public DeleteEnvironmentMembershipRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}