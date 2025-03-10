/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInternetGatewayRequest {
    
    public Boolean dryRun;

    public DeleteInternetGatewayRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public String internetGatewayId;

    public DeleteInternetGatewayRequest withInternetGatewayId(String internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
        return this;
    }
    
    public DeleteInternetGatewayRequest(@JsonProperty("InternetGatewayId") String internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
  }
}
