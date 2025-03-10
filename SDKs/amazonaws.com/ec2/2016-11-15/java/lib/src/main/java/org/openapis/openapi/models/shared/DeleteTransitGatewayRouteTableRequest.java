/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTransitGatewayRouteTableRequest {
    
    public Boolean dryRun;

    public DeleteTransitGatewayRouteTableRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public String transitGatewayRouteTableId;

    public DeleteTransitGatewayRouteTableRequest withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    
    public DeleteTransitGatewayRouteTableRequest(@JsonProperty("TransitGatewayRouteTableId") String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
  }
}
