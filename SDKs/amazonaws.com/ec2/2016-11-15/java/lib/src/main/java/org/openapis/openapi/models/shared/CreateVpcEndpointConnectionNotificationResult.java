/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * CreateVpcEndpointConnectionNotificationResult - Success
 */
public class CreateVpcEndpointConnectionNotificationResult {
    
    public String clientToken;

    public CreateVpcEndpointConnectionNotificationResult withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    
    
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification connectionNotification;

    public CreateVpcEndpointConnectionNotificationResult withConnectionNotification(CreateVpcEndpointConnectionNotificationResultConnectionNotification connectionNotification) {
        this.connectionNotification = connectionNotification;
        return this;
    }
    
    public CreateVpcEndpointConnectionNotificationResult(){}
}
