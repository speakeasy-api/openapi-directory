/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum CloudHsmObjectStateEnum {
    READY("READY"),
    UPDATING("UPDATING"),
    DEGRADED("DEGRADED");

    @JsonValue
    public final String value;

    private CloudHsmObjectStateEnum(String value) {
        this.value = value;
    }
}
