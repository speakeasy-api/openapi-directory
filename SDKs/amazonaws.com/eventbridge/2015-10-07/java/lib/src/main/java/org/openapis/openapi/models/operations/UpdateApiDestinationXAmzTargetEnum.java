/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateApiDestinationXAmzTargetEnum
 */
public enum UpdateApiDestinationXAmzTargetEnum {
    AWS_EVENTS_UPDATE_API_DESTINATION("AWSEvents.UpdateApiDestination");

    @JsonValue
    public final String value;

    private UpdateApiDestinationXAmzTargetEnum(String value) {
        this.value = value;
    }
}
