/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeleteRuleXAmzTargetEnum
 */
public enum DeleteRuleXAmzTargetEnum {
    AWSWAF_REGIONAL20161128_DELETE_RULE("AWSWAF_Regional_20161128.DeleteRule");

    @JsonValue
    public final String value;

    private DeleteRuleXAmzTargetEnum(String value) {
        this.value = value;
    }
}
