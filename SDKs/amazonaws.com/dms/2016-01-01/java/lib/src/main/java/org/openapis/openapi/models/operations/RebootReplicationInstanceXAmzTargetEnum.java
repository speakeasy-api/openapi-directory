/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * RebootReplicationInstanceXAmzTargetEnum
 */
public enum RebootReplicationInstanceXAmzTargetEnum {
    AMAZON_DM_SV20160101_REBOOT_REPLICATION_INSTANCE("AmazonDMSv20160101.RebootReplicationInstance");

    @JsonValue
    public final String value;

    private RebootReplicationInstanceXAmzTargetEnum(String value) {
        this.value = value;
    }
}
