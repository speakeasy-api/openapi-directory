/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import java.time.OffsetDateTime;

/**
 * DescribeVpcPeeringConnectionsResultVpcPeeringConnections - Describes a VPC peering connection.
 */
public class DescribeVpcPeeringConnectionsResultVpcPeeringConnections {
    
    public DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfo accepterVpcInfo;

    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections withAccepterVpcInfo(DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsAccepterVpcInfo accepterVpcInfo) {
        this.accepterVpcInfo = accepterVpcInfo;
        return this;
    }
    
    
    public OffsetDateTime expirationTime;

    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections withExpirationTime(OffsetDateTime expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    
    
    public DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfo requesterVpcInfo;

    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections withRequesterVpcInfo(DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsRequesterVpcInfo requesterVpcInfo) {
        this.requesterVpcInfo = requesterVpcInfo;
        return this;
    }
    
    
    public DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsStatus status;

    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections withStatus(DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsStatus status) {
        this.status = status;
        return this;
    }
    
    
    public DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsTags[] tags;

    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections withTags(DescribeVpcPeeringConnectionsResultVpcPeeringConnectionsTags[] tags) {
        this.tags = tags;
        return this;
    }
    
    
    public String vpcPeeringConnectionId;

    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
    
    public DescribeVpcPeeringConnectionsResultVpcPeeringConnections(){}
}
