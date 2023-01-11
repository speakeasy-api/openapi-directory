package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserProfileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSelfManagement")
    public Boolean allowSelfManagement;
    public UpdateUserProfileRequest withAllowSelfManagement(Boolean allowSelfManagement) {
        this.allowSelfManagement = allowSelfManagement;
        return this;
    }
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public UpdateUserProfileRequest withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshPublicKey")
    public String sshPublicKey;
    public UpdateUserProfileRequest withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshUsername")
    public String sshUsername;
    public UpdateUserProfileRequest withSshUsername(String sshUsername) {
        this.sshUsername = sshUsername;
        return this;
    }
}