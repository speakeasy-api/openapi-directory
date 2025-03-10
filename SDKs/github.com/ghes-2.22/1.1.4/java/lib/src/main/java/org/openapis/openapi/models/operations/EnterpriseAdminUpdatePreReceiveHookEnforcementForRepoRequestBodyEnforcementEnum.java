/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum - The state of enforcement for the hook on this repository.
 */
public enum EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum {
    ENABLED("enabled"),
    DISABLED("disabled"),
    TESTING("testing");

    @JsonValue
    public final String value;

    private EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum(String value) {
        this.value = value;
    }
}
