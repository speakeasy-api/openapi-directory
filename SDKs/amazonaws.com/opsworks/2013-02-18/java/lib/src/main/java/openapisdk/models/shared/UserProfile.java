package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserProfile
 * Describes a user's SSH information.
**/
public class UserProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSelfManagement")
    public Boolean allowSelfManagement;
    public UserProfile withAllowSelfManagement(Boolean allowSelfManagement) {
        this.allowSelfManagement = allowSelfManagement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public UserProfile withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UserProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshPublicKey")
    public String sshPublicKey;
    public UserProfile withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshUsername")
    public String sshUsername;
    public UserProfile withSshUsername(String sshUsername) {
        this.sshUsername = sshUsername;
        return this;
    }
}