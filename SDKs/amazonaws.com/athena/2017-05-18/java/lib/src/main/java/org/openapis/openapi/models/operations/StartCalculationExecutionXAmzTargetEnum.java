/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * StartCalculationExecutionXAmzTargetEnum
 */
public enum StartCalculationExecutionXAmzTargetEnum {
    AMAZON_ATHENA_START_CALCULATION_EXECUTION("AmazonAthena.StartCalculationExecution");

    @JsonValue
    public final String value;

    private StartCalculationExecutionXAmzTargetEnum(String value) {
        this.value = value;
    }
}
