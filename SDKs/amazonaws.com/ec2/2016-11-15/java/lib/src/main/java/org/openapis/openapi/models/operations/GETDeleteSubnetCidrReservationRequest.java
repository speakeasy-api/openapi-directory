/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETDeleteSubnetCidrReservationRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETDeleteSubnetCidrReservationActionEnum action;

    public GETDeleteSubnetCidrReservationRequest withAction(GETDeleteSubnetCidrReservationActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is &lt;code&gt;DryRunOperation&lt;/code&gt;. Otherwise, it is &lt;code&gt;UnauthorizedOperation&lt;/code&gt;.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;

    public GETDeleteSubnetCidrReservationRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    /**
     * The ID of the subnet CIDR reservation.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetCidrReservationId")
    public String subnetCidrReservationId;

    public GETDeleteSubnetCidrReservationRequest withSubnetCidrReservationId(String subnetCidrReservationId) {
        this.subnetCidrReservationId = subnetCidrReservationId;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETDeleteSubnetCidrReservationVersionEnum version;

    public GETDeleteSubnetCidrReservationRequest withVersion(GETDeleteSubnetCidrReservationVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETDeleteSubnetCidrReservationRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETDeleteSubnetCidrReservationRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETDeleteSubnetCidrReservationRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETDeleteSubnetCidrReservationRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETDeleteSubnetCidrReservationRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETDeleteSubnetCidrReservationRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETDeleteSubnetCidrReservationRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETDeleteSubnetCidrReservationRequest(@JsonProperty("Action") GETDeleteSubnetCidrReservationActionEnum action, @JsonProperty("SubnetCidrReservationId") String subnetCidrReservationId, @JsonProperty("Version") GETDeleteSubnetCidrReservationVersionEnum version) {
        this.action = action;
        this.subnetCidrReservationId = subnetCidrReservationId;
        this.version = version;
  }
}
