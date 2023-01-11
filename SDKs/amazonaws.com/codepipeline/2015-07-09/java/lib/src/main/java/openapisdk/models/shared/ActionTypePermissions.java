package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActionTypePermissions
 * Details identifying the users with permissions to use the action type.
**/
public class ActionTypePermissions {
    @JsonProperty("allowedAccounts")
    public String[] allowedAccounts;
    public ActionTypePermissions withAllowedAccounts(String[] allowedAccounts) {
        this.allowedAccounts = allowedAccounts;
        return this;
    }
}