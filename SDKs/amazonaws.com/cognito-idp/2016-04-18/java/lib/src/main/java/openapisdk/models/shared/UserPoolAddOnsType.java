package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserPoolAddOnsType
 * The user pool add-ons type.
**/
public class UserPoolAddOnsType {
    @JsonProperty("AdvancedSecurityMode")
    public AdvancedSecurityModeTypeEnum advancedSecurityMode;
    public UserPoolAddOnsType withAdvancedSecurityMode(AdvancedSecurityModeTypeEnum advancedSecurityMode) {
        this.advancedSecurityMode = advancedSecurityMode;
        return this;
    }
}