/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnableDomainTransferLockRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.EnableDomainTransferLockRequest enableDomainTransferLockRequest;

    public EnableDomainTransferLockRequest withEnableDomainTransferLockRequest(org.openapis.openapi.models.shared.EnableDomainTransferLockRequest enableDomainTransferLockRequest) {
        this.enableDomainTransferLockRequest = enableDomainTransferLockRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public EnableDomainTransferLockRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public EnableDomainTransferLockRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public EnableDomainTransferLockRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public EnableDomainTransferLockRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public EnableDomainTransferLockRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public EnableDomainTransferLockRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public EnableDomainTransferLockRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public EnableDomainTransferLockXAmzTargetEnum xAmzTarget;

    public EnableDomainTransferLockRequest withXAmzTarget(EnableDomainTransferLockXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public EnableDomainTransferLockRequest(@JsonProperty("EnableDomainTransferLockRequest") org.openapis.openapi.models.shared.EnableDomainTransferLockRequest enableDomainTransferLockRequest, @JsonProperty("X-Amz-Target") EnableDomainTransferLockXAmzTargetEnum xAmzTarget) {
        this.enableDomainTransferLockRequest = enableDomainTransferLockRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
