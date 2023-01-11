package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityInfo
 * Information about an email identity.
**/
public class IdentityInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityName")
    public String identityName;
    public IdentityInfo withIdentityName(String identityName) {
        this.identityName = identityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityType")
    public IdentityTypeEnum identityType;
    public IdentityInfo withIdentityType(IdentityTypeEnum identityType) {
        this.identityType = identityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingEnabled")
    public Boolean sendingEnabled;
    public IdentityInfo withSendingEnabled(Boolean sendingEnabled) {
        this.sendingEnabled = sendingEnabled;
        return this;
    }
}