/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum JobStatusEnum {
    SUBMITTED("SUBMITTED"),
    PENDING("PENDING"),
    RUNNABLE("RUNNABLE"),
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    @JsonValue
    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
