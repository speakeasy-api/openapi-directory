/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAccountSettingsOutput - Success
 */
public class GetAccountSettingsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountSettings")
    public AccountSettings accountSettings;

    public GetAccountSettingsOutput withAccountSettings(AccountSettings accountSettings) {
        this.accountSettings = accountSettings;
        return this;
    }
    
    public GetAccountSettingsOutput(){}
}
