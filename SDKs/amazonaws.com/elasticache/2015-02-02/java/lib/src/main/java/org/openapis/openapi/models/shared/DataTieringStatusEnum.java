/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum DataTieringStatusEnum {
    ENABLED("enabled"),
    DISABLED("disabled");

    @JsonValue
    public final String value;

    private DataTieringStatusEnum(String value) {
        this.value = value;
    }
}
