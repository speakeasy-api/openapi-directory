/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SubmissionEntryRoutingGroupEnum - Allows you to choose routing. The default is STANDARD.
 * 
 */
public enum SubmissionEntryRoutingGroupEnum {
    ECONOMY("ECONOMY"),
    STANDARD("STANDARD"),
    PREMIUM("PREMIUM");

    @JsonValue
    public final String value;

    private SubmissionEntryRoutingGroupEnum(String value) {
        this.value = value;
    }
}
