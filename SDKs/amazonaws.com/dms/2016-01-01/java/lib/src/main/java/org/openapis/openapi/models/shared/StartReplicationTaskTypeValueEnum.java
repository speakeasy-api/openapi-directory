/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum StartReplicationTaskTypeValueEnum {
    START_REPLICATION("start-replication"),
    RESUME_PROCESSING("resume-processing"),
    RELOAD_TARGET("reload-target");

    @JsonValue
    public final String value;

    private StartReplicationTaskTypeValueEnum(String value) {
        this.value = value;
    }
}
