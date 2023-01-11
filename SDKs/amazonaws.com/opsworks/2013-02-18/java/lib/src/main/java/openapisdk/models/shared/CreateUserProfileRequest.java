package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserProfileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSelfManagement")
    public Boolean allowSelfManagement;
    public CreateUserProfileRequest withAllowSelfManagement(Boolean allowSelfManagement) {
        this.allowSelfManagement = allowSelfManagement;
        return this;
    }
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public CreateUserProfileRequest withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshPublicKey")
    public String sshPublicKey;
    public CreateUserProfileRequest withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshUsername")
    public String sshUsername;
    public CreateUserProfileRequest withSshUsername(String sshUsername) {
        this.sshUsername = sshUsername;
        return this;
    }
}