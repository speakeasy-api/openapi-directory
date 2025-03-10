/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateVpcResultVpcInstanceTenancyEnum - The allowed tenancy of instances launched into the VPC.
 */
public enum CreateVpcResultVpcInstanceTenancyEnum {
    DEFAULT_("default"),
    DEDICATED("dedicated"),
    HOST("host");

    @JsonValue
    public final String value;

    private CreateVpcResultVpcInstanceTenancyEnum(String value) {
        this.value = value;
    }
}
