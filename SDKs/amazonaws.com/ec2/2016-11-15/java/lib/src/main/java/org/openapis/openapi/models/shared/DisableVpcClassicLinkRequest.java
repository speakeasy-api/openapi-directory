/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableVpcClassicLinkRequest {
    
    public Boolean dryRun;

    public DisableVpcClassicLinkRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public String vpcId;

    public DisableVpcClassicLinkRequest withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    
    public DisableVpcClassicLinkRequest(@JsonProperty("VpcId") String vpcId) {
        this.vpcId = vpcId;
  }
}
