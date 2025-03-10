/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum SyncStatusEnum {
    SYNCING("SYNCING"),
    ACKNOWLEDGED("ACKNOWLEDGED"),
    IN_SYNC("IN_SYNC"),
    SYNC_FAILED("SYNC_FAILED"),
    DELETING("DELETING"),
    DELETE_FAILED("DELETE_FAILED");

    @JsonValue
    public final String value;

    private SyncStatusEnum(String value) {
        this.value = value;
    }
}
