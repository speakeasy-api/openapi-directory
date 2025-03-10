/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateVpcEndpointConnectionNotificationRequest {
    
    public String clientToken;

    public CreateVpcEndpointConnectionNotificationRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    
    
    public String[] connectionEvents;

    public CreateVpcEndpointConnectionNotificationRequest withConnectionEvents(String[] connectionEvents) {
        this.connectionEvents = connectionEvents;
        return this;
    }
    
    
    public String connectionNotificationArn;

    public CreateVpcEndpointConnectionNotificationRequest withConnectionNotificationArn(String connectionNotificationArn) {
        this.connectionNotificationArn = connectionNotificationArn;
        return this;
    }
    
    
    public Boolean dryRun;

    public CreateVpcEndpointConnectionNotificationRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public String serviceId;

    public CreateVpcEndpointConnectionNotificationRequest withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    
    
    public String vpcEndpointId;

    public CreateVpcEndpointConnectionNotificationRequest withVpcEndpointId(String vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    
    public CreateVpcEndpointConnectionNotificationRequest(@JsonProperty("ConnectionEvents") String[] connectionEvents, @JsonProperty("ConnectionNotificationArn") String connectionNotificationArn) {
        this.connectionEvents = connectionEvents;
        this.connectionNotificationArn = connectionNotificationArn;
  }
}
