/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum AnomalyDetectionTaskStatusEnum {
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    FAILED_TO_SCHEDULE("FAILED_TO_SCHEDULE");

    @JsonValue
    public final String value;

    private AnomalyDetectionTaskStatusEnum(String value) {
        this.value = value;
    }
}
