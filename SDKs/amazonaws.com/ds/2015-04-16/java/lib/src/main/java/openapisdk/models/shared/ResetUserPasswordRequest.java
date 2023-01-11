package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResetUserPasswordRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public ResetUserPasswordRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("NewPassword")
    public String newPassword;
    public ResetUserPasswordRequest withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public ResetUserPasswordRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}