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
 * AdminGetUserResponse
 * Represents the response from the server from the request to get the specified user as an administrator.
**/
public class AdminGetUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AdminGetUserResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MFAOptions")
    public MfaOptionType[] mfaOptions;
    public AdminGetUserResponse withMfaOptions(MfaOptionType[] mfaOptions) {
        this.mfaOptions = mfaOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMfaSetting")
    public String preferredMfaSetting;
    public AdminGetUserResponse withPreferredMfaSetting(String preferredMfaSetting) {
        this.preferredMfaSetting = preferredMfaSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserAttributes")
    public AttributeType[] userAttributes;
    public AdminGetUserResponse withUserAttributes(AttributeType[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UserCreateDate")
    public OffsetDateTime userCreateDate;
    public AdminGetUserResponse withUserCreateDate(OffsetDateTime userCreateDate) {
        this.userCreateDate = userCreateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UserLastModifiedDate")
    public OffsetDateTime userLastModifiedDate;
    public AdminGetUserResponse withUserLastModifiedDate(OffsetDateTime userLastModifiedDate) {
        this.userLastModifiedDate = userLastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserMFASettingList")
    public String[] userMFASettingList;
    public AdminGetUserResponse withUserMfaSettingList(String[] userMFASettingList) {
        this.userMFASettingList = userMFASettingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserStatus")
    public UserStatusTypeEnum userStatus;
    public AdminGetUserResponse withUserStatus(UserStatusTypeEnum userStatus) {
        this.userStatus = userStatus;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminGetUserResponse withUsername(String username) {
        this.username = username;
        return this;
    }
}