package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResetPasswordRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public ResetPasswordRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public ResetPasswordRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public ResetPasswordRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}