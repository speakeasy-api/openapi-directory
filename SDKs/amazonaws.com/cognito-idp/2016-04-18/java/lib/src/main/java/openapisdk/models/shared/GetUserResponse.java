package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUserResponse
 * Represents the response from the server from the request to get information about the user.
**/
public class GetUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MFAOptions")
    public MfaOptionType[] mfaOptions;
    public GetUserResponse withMfaOptions(MfaOptionType[] mfaOptions) {
        this.mfaOptions = mfaOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMfaSetting")
    public String preferredMfaSetting;
    public GetUserResponse withPreferredMfaSetting(String preferredMfaSetting) {
        this.preferredMfaSetting = preferredMfaSetting;
        return this;
    }
    @JsonProperty("UserAttributes")
    public AttributeType[] userAttributes;
    public GetUserResponse withUserAttributes(AttributeType[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserMFASettingList")
    public String[] userMFASettingList;
    public GetUserResponse withUserMfaSettingList(String[] userMFASettingList) {
        this.userMFASettingList = userMFASettingList;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public GetUserResponse withUsername(String username) {
        this.username = username;
        return this;
    }
}