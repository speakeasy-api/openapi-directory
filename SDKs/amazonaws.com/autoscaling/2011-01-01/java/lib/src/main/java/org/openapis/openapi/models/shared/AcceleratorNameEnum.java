/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum AcceleratorNameEnum {
    A100("a100"),
    V100("v100"),
    K80("k80"),
    T4("t4"),
    M60("m60"),
    RADEON_PRO_V520("radeon-pro-v520"),
    VU9P("vu9p");

    @JsonValue
    public final String value;

    private AcceleratorNameEnum(String value) {
        this.value = value;
    }
}
