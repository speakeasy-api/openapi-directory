/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetSnapshotXAmzTargetEnum
 */
public enum GetSnapshotXAmzTargetEnum {
    REDSHIFT_SERVERLESS_GET_SNAPSHOT("RedshiftServerless.GetSnapshot");

    @JsonValue
    public final String value;

    private GetSnapshotXAmzTargetEnum(String value) {
        this.value = value;
    }
}
