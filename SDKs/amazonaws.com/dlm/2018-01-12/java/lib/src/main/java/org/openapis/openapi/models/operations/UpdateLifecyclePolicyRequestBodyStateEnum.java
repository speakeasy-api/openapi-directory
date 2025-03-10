/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateLifecyclePolicyRequestBodyStateEnum - The desired activation state of the lifecycle policy after creation.
 */
public enum UpdateLifecyclePolicyRequestBodyStateEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED");

    @JsonValue
    public final String value;

    private UpdateLifecyclePolicyRequestBodyStateEnum(String value) {
        this.value = value;
    }
}
