/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * RestoreFromSnapshotXAmzTargetEnum
 */
public enum RestoreFromSnapshotXAmzTargetEnum {
    REDSHIFT_SERVERLESS_RESTORE_FROM_SNAPSHOT("RedshiftServerless.RestoreFromSnapshot");

    @JsonValue
    public final String value;

    private RestoreFromSnapshotXAmzTargetEnum(String value) {
        this.value = value;
    }
}
