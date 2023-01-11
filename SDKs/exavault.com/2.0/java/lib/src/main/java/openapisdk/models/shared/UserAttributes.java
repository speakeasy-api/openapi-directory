package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UserAttributes
 * Attributes of the user including expiration, home directory, and permissions. 
**/
public class UserAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessTimestamp")
    public String accessTimestamp;
    public UserAttributes withAccessTimestamp(String accessTimestamp) {
        this.accessTimestamp = accessTimestamp;
        return this;
    }
    @JsonProperty("accountName")
    public String accountName;
    public UserAttributes withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public UserAttributes withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserAttributes withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;
    public UserAttributes withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstLogin")
    public Boolean firstLogin;
    public UserAttributes withFirstLogin(Boolean firstLogin) {
        this.firstLogin = firstLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homePath")
    public String homePath;
    public UserAttributes withHomePath(String homePath) {
        this.homePath = homePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public UserAttributes withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public UserAttributes withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public UserAttributes withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("onboarding")
    public Boolean onboarding;
    public UserAttributes withOnboarding(Boolean onboarding) {
        this.onboarding = onboarding;
        return this;
    }
    @JsonProperty("permissions")
    public UserPermissions permissions;
    public UserAttributes withPermissions(UserPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("role")
    public UserAttributesRoleEnum role;
    public UserAttributes withRole(UserAttributesRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonProperty("status")
    public Integer status;
    public UserAttributes withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonProperty("timeZone")
    public String timeZone;
    public UserAttributes withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public UserAttributes withUsername(String username) {
        this.username = username;
        return this;
    }
}