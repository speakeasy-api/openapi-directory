/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteImpersonationRoleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.DeleteImpersonationRoleRequest deleteImpersonationRoleRequest;

    public DeleteImpersonationRoleRequest withDeleteImpersonationRoleRequest(org.openapis.openapi.models.shared.DeleteImpersonationRoleRequest deleteImpersonationRoleRequest) {
        this.deleteImpersonationRoleRequest = deleteImpersonationRoleRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public DeleteImpersonationRoleRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public DeleteImpersonationRoleRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public DeleteImpersonationRoleRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public DeleteImpersonationRoleRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public DeleteImpersonationRoleRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public DeleteImpersonationRoleRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public DeleteImpersonationRoleRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public DeleteImpersonationRoleXAmzTargetEnum xAmzTarget;

    public DeleteImpersonationRoleRequest withXAmzTarget(DeleteImpersonationRoleXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public DeleteImpersonationRoleRequest(@JsonProperty("DeleteImpersonationRoleRequest") org.openapis.openapi.models.shared.DeleteImpersonationRoleRequest deleteImpersonationRoleRequest, @JsonProperty("X-Amz-Target") DeleteImpersonationRoleXAmzTargetEnum xAmzTarget) {
        this.deleteImpersonationRoleRequest = deleteImpersonationRoleRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
