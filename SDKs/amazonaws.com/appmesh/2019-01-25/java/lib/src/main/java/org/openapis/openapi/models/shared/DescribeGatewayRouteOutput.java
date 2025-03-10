/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeGatewayRouteOutput - Success
 */
public class DescribeGatewayRouteOutput {
    @JsonProperty("gatewayRoute")
    public GatewayRouteData gatewayRoute;

    public DescribeGatewayRouteOutput withGatewayRoute(GatewayRouteData gatewayRoute) {
        this.gatewayRoute = gatewayRoute;
        return this;
    }
    
    public DescribeGatewayRouteOutput(@JsonProperty("gatewayRoute") GatewayRouteData gatewayRoute) {
        this.gatewayRoute = gatewayRoute;
  }
}
