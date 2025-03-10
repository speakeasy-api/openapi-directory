/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ProvisionedResourceEngineEnum - List of provisioning engines
 */
public enum ProvisionedResourceEngineEnum {
    CLOUDFORMATION("CLOUDFORMATION"),
    TERRAFORM("TERRAFORM");

    @JsonValue
    public final String value;

    private ProvisionedResourceEngineEnum(String value) {
        this.value = value;
    }
}
