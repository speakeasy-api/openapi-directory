/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreatePreparedStatementXAmzTargetEnum
 */
public enum CreatePreparedStatementXAmzTargetEnum {
    AMAZON_ATHENA_CREATE_PREPARED_STATEMENT("AmazonAthena.CreatePreparedStatement");

    @JsonValue
    public final String value;

    private CreatePreparedStatementXAmzTargetEnum(String value) {
        this.value = value;
    }
}
