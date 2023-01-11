package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangeEmailRequest {
    @JsonProperty("newEmail")
    public String newEmail;
    public ChangeEmailRequest withNewEmail(String newEmail) {
        this.newEmail = newEmail;
        return this;
    }
}