/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ScheduleLambdaFunctionFailedCauseEnum {
    ID_ALREADY_IN_USE("ID_ALREADY_IN_USE"),
    OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED("OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED"),
    LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED("LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED"),
    LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION("LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION");

    @JsonValue
    public final String value;

    private ScheduleLambdaFunctionFailedCauseEnum(String value) {
        this.value = value;
    }
}
