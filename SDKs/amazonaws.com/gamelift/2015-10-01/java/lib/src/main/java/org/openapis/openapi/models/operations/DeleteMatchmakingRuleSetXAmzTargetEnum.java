/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeleteMatchmakingRuleSetXAmzTargetEnum
 */
public enum DeleteMatchmakingRuleSetXAmzTargetEnum {
    GAME_LIFT_DELETE_MATCHMAKING_RULE_SET("GameLift.DeleteMatchmakingRuleSet");

    @JsonValue
    public final String value;

    private DeleteMatchmakingRuleSetXAmzTargetEnum(String value) {
        this.value = value;
    }
}
