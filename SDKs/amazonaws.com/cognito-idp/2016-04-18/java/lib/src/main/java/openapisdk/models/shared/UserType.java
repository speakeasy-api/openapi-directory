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
 * UserType
 * The user type.
**/
public class UserType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeType[] attributes;
    public UserType withAttributes(AttributeType[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UserType withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MFAOptions")
    public MfaOptionType[] mfaOptions;
    public UserType withMfaOptions(MfaOptionType[] mfaOptions) {
        this.mfaOptions = mfaOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UserCreateDate")
    public OffsetDateTime userCreateDate;
    public UserType withUserCreateDate(OffsetDateTime userCreateDate) {
        this.userCreateDate = userCreateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UserLastModifiedDate")
    public OffsetDateTime userLastModifiedDate;
    public UserType withUserLastModifiedDate(OffsetDateTime userLastModifiedDate) {
        this.userLastModifiedDate = userLastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserStatus")
    public UserStatusTypeEnum userStatus;
    public UserType withUserStatus(UserStatusTypeEnum userStatus) {
        this.userStatus = userStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public UserType withUsername(String username) {
        this.username = username;
        return this;
    }
}