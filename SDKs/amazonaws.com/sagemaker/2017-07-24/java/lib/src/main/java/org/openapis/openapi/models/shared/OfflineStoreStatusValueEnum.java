/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum OfflineStoreStatusValueEnum {
    ACTIVE("Active"),
    BLOCKED("Blocked"),
    DISABLED("Disabled");

    @JsonValue
    public final String value;

    private OfflineStoreStatusValueEnum(String value) {
        this.value = value;
    }
}
