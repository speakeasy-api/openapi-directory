/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum DataSourceSyncJobStatusEnum {
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    SYNCING("SYNCING"),
    INCOMPLETE("INCOMPLETE"),
    STOPPING("STOPPING"),
    ABORTED("ABORTED"),
    SYNCING_INDEXING("SYNCING_INDEXING");

    @JsonValue
    public final String value;

    private DataSourceSyncJobStatusEnum(String value) {
        this.value = value;
    }
}
