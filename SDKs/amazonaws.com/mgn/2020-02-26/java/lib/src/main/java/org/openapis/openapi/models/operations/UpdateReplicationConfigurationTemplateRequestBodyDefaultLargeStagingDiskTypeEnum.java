/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum - Update replication configuration template use default large Staging Disk type request.
 */
public enum UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    GP2("GP2"),
    ST1("ST1"),
    GP3("GP3");

    @JsonValue
    public final String value;

    private UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum(String value) {
        this.value = value;
    }
}
