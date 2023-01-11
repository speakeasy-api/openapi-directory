package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMyUserProfileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshPublicKey")
    public String sshPublicKey;
    public UpdateMyUserProfileRequest withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
}