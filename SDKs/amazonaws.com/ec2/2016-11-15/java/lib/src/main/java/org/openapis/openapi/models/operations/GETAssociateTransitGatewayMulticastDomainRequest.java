/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETAssociateTransitGatewayMulticastDomainRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETAssociateTransitGatewayMulticastDomainActionEnum action;

    public GETAssociateTransitGatewayMulticastDomainRequest withAction(GETAssociateTransitGatewayMulticastDomainActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is &lt;code&gt;DryRunOperation&lt;/code&gt;. Otherwise, it is &lt;code&gt;UnauthorizedOperation&lt;/code&gt;.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;

    public GETAssociateTransitGatewayMulticastDomainRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    /**
     * The IDs of the subnets to associate with the transit gateway multicast domain.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetIds")
    public String[] subnetIds;

    public GETAssociateTransitGatewayMulticastDomainRequest withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    
    /**
     * The ID of the transit gateway attachment to associate with the transit gateway multicast domain.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;

    public GETAssociateTransitGatewayMulticastDomainRequest withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    
    /**
     * The ID of the transit gateway multicast domain.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayMulticastDomainId")
    public String transitGatewayMulticastDomainId;

    public GETAssociateTransitGatewayMulticastDomainRequest withTransitGatewayMulticastDomainId(String transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETAssociateTransitGatewayMulticastDomainVersionEnum version;

    public GETAssociateTransitGatewayMulticastDomainRequest withVersion(GETAssociateTransitGatewayMulticastDomainVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETAssociateTransitGatewayMulticastDomainRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETAssociateTransitGatewayMulticastDomainRequest(@JsonProperty("Action") GETAssociateTransitGatewayMulticastDomainActionEnum action, @JsonProperty("SubnetIds") String[] subnetIds, @JsonProperty("TransitGatewayAttachmentId") String transitGatewayAttachmentId, @JsonProperty("TransitGatewayMulticastDomainId") String transitGatewayMulticastDomainId, @JsonProperty("Version") GETAssociateTransitGatewayMulticastDomainVersionEnum version) {
        this.action = action;
        this.subnetIds = subnetIds;
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        this.version = version;
  }
}
