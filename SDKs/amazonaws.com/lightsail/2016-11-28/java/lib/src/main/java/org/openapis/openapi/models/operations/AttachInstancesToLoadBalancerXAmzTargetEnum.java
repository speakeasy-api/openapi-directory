/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * AttachInstancesToLoadBalancerXAmzTargetEnum
 */
public enum AttachInstancesToLoadBalancerXAmzTargetEnum {
    LIGHTSAIL20161128_ATTACH_INSTANCES_TO_LOAD_BALANCER("Lightsail_20161128.AttachInstancesToLoadBalancer");

    @JsonValue
    public final String value;

    private AttachInstancesToLoadBalancerXAmzTargetEnum(String value) {
        this.value = value;
    }
}
