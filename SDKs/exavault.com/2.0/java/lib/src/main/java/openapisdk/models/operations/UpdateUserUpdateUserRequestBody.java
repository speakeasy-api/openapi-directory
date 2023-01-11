package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserUpdateUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpdateUserUpdateUserRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;
    public UpdateUserUpdateUserRequestBody withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeResource")
    public String homeResource;
    public UpdateUserUpdateUserRequestBody withHomeResource(String homeResource) {
        this.homeResource = homeResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public UpdateUserUpdateUserRequestBody withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public UpdateUserUpdateUserRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboarding")
    public Boolean onboarding;
    public UpdateUserUpdateUserRequestBody withOnboarding(Boolean onboarding) {
        this.onboarding = onboarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UpdateUserUpdateUserRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.UserPermissions permissions;
    public UpdateUserUpdateUserRequestBody withPermissions(openapisdk.models.shared.UserPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public UpdateUserUpdateUserRequestBodyRoleEnum role;
    public UpdateUserUpdateUserRequestBody withRole(UpdateUserUpdateUserRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public UpdateUserUpdateUserRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UpdateUserUpdateUserRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}