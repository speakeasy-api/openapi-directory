/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateNetworkAclResultNetworkAclEntriesRuleActionEnum - Indicates whether to allow or deny the traffic that matches the rule.
 */
public enum CreateNetworkAclResultNetworkAclEntriesRuleActionEnum {
    ALLOW("allow"),
    DENY("deny");

    @JsonValue
    public final String value;

    private CreateNetworkAclResultNetworkAclEntriesRuleActionEnum(String value) {
        this.value = value;
    }
}
