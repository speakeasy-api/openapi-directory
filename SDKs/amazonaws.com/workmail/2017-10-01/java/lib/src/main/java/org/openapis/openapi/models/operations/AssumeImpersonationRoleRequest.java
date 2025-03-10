/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AssumeImpersonationRoleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.AssumeImpersonationRoleRequest assumeImpersonationRoleRequest;

    public AssumeImpersonationRoleRequest withAssumeImpersonationRoleRequest(org.openapis.openapi.models.shared.AssumeImpersonationRoleRequest assumeImpersonationRoleRequest) {
        this.assumeImpersonationRoleRequest = assumeImpersonationRoleRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public AssumeImpersonationRoleRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public AssumeImpersonationRoleRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public AssumeImpersonationRoleRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public AssumeImpersonationRoleRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public AssumeImpersonationRoleRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public AssumeImpersonationRoleRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public AssumeImpersonationRoleRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public AssumeImpersonationRoleXAmzTargetEnum xAmzTarget;

    public AssumeImpersonationRoleRequest withXAmzTarget(AssumeImpersonationRoleXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public AssumeImpersonationRoleRequest(@JsonProperty("AssumeImpersonationRoleRequest") org.openapis.openapi.models.shared.AssumeImpersonationRoleRequest assumeImpersonationRoleRequest, @JsonProperty("X-Amz-Target") AssumeImpersonationRoleXAmzTargetEnum xAmzTarget) {
        this.assumeImpersonationRoleRequest = assumeImpersonationRoleRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
