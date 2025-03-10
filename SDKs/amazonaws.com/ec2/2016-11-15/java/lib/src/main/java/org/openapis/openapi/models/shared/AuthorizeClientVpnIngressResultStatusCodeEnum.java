/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * AuthorizeClientVpnIngressResultStatusCodeEnum - The state of the authorization rule.
 */
public enum AuthorizeClientVpnIngressResultStatusCodeEnum {
    AUTHORIZING("authorizing"),
    ACTIVE("active"),
    FAILED("failed"),
    REVOKING("revoking");

    @JsonValue
    public final String value;

    private AuthorizeClientVpnIngressResultStatusCodeEnum(String value) {
        this.value = value;
    }
}
