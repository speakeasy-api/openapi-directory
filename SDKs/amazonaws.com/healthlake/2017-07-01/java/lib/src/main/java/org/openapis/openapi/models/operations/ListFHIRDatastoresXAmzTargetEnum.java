/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ListFHIRDatastoresXAmzTargetEnum
 */
public enum ListFHIRDatastoresXAmzTargetEnum {
    HEALTH_LAKE_LIST_FHIR_DATASTORES("HealthLake.ListFHIRDatastores");

    @JsonValue
    public final String value;

    private ListFHIRDatastoresXAmzTargetEnum(String value) {
        this.value = value;
    }
}
