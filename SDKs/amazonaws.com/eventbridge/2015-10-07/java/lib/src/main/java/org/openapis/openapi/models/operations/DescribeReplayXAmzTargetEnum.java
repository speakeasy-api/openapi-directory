/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeReplayXAmzTargetEnum
 */
public enum DescribeReplayXAmzTargetEnum {
    AWS_EVENTS_DESCRIBE_REPLAY("AWSEvents.DescribeReplay");

    @JsonValue
    public final String value;

    private DescribeReplayXAmzTargetEnum(String value) {
        this.value = value;
    }
}
