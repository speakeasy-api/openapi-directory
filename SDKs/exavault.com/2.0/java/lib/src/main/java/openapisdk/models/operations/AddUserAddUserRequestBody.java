package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserAddUserRequestBody {
    @JsonProperty("email")
    public String email;
    public AddUserAddUserRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;
    public AddUserAddUserRequestBody withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonProperty("homeResource")
    public String homeResource;
    public AddUserAddUserRequestBody withHomeResource(String homeResource) {
        this.homeResource = homeResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public AddUserAddUserRequestBody withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public AddUserAddUserRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboarding")
    public Boolean onboarding;
    public AddUserAddUserRequestBody withOnboarding(Boolean onboarding) {
        this.onboarding = onboarding;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public AddUserAddUserRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("permissions")
    public AddUserAddUserRequestBodyPermissions permissions;
    public AddUserAddUserRequestBody withPermissions(AddUserAddUserRequestBodyPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("role")
    public AddUserAddUserRequestBodyRoleEnum role;
    public AddUserAddUserRequestBody withRole(AddUserAddUserRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonProperty("timeZone")
    public String timeZone;
    public AddUserAddUserRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public AddUserAddUserRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcomeEmail")
    public Boolean welcomeEmail;
    public AddUserAddUserRequestBody withWelcomeEmail(Boolean welcomeEmail) {
        this.welcomeEmail = welcomeEmail;
        return this;
    }
}