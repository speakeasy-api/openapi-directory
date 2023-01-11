package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangePasswordRequest {
    @JsonProperty("newPassword")
    public String newPassword;
    public ChangePasswordRequest withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @JsonProperty("oldPassword")
    public String oldPassword;
    public ChangePasswordRequest withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
}