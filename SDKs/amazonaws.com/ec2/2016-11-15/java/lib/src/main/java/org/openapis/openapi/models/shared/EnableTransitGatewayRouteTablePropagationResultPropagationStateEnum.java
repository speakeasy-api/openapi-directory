/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * EnableTransitGatewayRouteTablePropagationResultPropagationStateEnum - The state.
 */
public enum EnableTransitGatewayRouteTablePropagationResultPropagationStateEnum {
    ENABLING("enabling"),
    ENABLED("enabled"),
    DISABLING("disabling"),
    DISABLED("disabled");

    @JsonValue
    public final String value;

    private EnableTransitGatewayRouteTablePropagationResultPropagationStateEnum(String value) {
        this.value = value;
    }
}
