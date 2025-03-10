/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETDescribeSnapshotAttributeRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETDescribeSnapshotAttributeActionEnum action;

    public GETDescribeSnapshotAttributeRequest withAction(GETDescribeSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * The snapshot attribute you would like to view.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GETDescribeSnapshotAttributeAttributeEnum attribute;

    public GETDescribeSnapshotAttributeRequest withAttribute(GETDescribeSnapshotAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is &lt;code&gt;DryRunOperation&lt;/code&gt;. Otherwise, it is &lt;code&gt;UnauthorizedOperation&lt;/code&gt;.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;

    public GETDescribeSnapshotAttributeRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    /**
     * The ID of the EBS snapshot.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotId")
    public String snapshotId;

    public GETDescribeSnapshotAttributeRequest withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETDescribeSnapshotAttributeVersionEnum version;

    public GETDescribeSnapshotAttributeRequest withVersion(GETDescribeSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETDescribeSnapshotAttributeRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETDescribeSnapshotAttributeRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETDescribeSnapshotAttributeRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETDescribeSnapshotAttributeRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETDescribeSnapshotAttributeRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETDescribeSnapshotAttributeRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETDescribeSnapshotAttributeRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETDescribeSnapshotAttributeRequest(@JsonProperty("Action") GETDescribeSnapshotAttributeActionEnum action, @JsonProperty("Attribute") GETDescribeSnapshotAttributeAttributeEnum attribute, @JsonProperty("SnapshotId") String snapshotId, @JsonProperty("Version") GETDescribeSnapshotAttributeVersionEnum version) {
        this.action = action;
        this.attribute = attribute;
        this.snapshotId = snapshotId;
        this.version = version;
  }
}
