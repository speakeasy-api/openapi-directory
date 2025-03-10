/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * IssuesLockRequestBodyLockReasonEnum - The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  
 * \* `off-topic`  
 * \* `too heated`  
 * \* `resolved`  
 * \* `spam`
 */
public enum IssuesLockRequestBodyLockReasonEnum {
    OFF_TOPIC("off-topic"),
    TOO_HEATED("too heated"),
    RESOLVED("resolved"),
    SPAM("spam");

    @JsonValue
    public final String value;

    private IssuesLockRequestBodyLockReasonEnum(String value) {
        this.value = value;
    }
}
