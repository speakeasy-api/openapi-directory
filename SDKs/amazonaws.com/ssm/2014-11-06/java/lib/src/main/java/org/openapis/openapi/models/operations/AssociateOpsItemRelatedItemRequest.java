/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AssociateOpsItemRelatedItemRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.AssociateOpsItemRelatedItemRequest associateOpsItemRelatedItemRequest;

    public AssociateOpsItemRelatedItemRequest withAssociateOpsItemRelatedItemRequest(org.openapis.openapi.models.shared.AssociateOpsItemRelatedItemRequest associateOpsItemRelatedItemRequest) {
        this.associateOpsItemRelatedItemRequest = associateOpsItemRelatedItemRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public AssociateOpsItemRelatedItemRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public AssociateOpsItemRelatedItemRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public AssociateOpsItemRelatedItemRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public AssociateOpsItemRelatedItemRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public AssociateOpsItemRelatedItemRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public AssociateOpsItemRelatedItemRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public AssociateOpsItemRelatedItemRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public AssociateOpsItemRelatedItemXAmzTargetEnum xAmzTarget;

    public AssociateOpsItemRelatedItemRequest withXAmzTarget(AssociateOpsItemRelatedItemXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public AssociateOpsItemRelatedItemRequest(@JsonProperty("AssociateOpsItemRelatedItemRequest") org.openapis.openapi.models.shared.AssociateOpsItemRelatedItemRequest associateOpsItemRelatedItemRequest, @JsonProperty("X-Amz-Target") AssociateOpsItemRelatedItemXAmzTargetEnum xAmzTarget) {
        this.associateOpsItemRelatedItemRequest = associateOpsItemRelatedItemRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
