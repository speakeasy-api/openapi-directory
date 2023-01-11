package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserProfileRequest {
    @JsonProperty("displayName")
    public String displayName;
    public CreateUserProfileRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("emailAddress")
    public String emailAddress;
    public CreateUserProfileRequest withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshPublicKey")
    public String sshPublicKey;
    public CreateUserProfileRequest withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public CreateUserProfileRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}