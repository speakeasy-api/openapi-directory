/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetPatchBaselineForPatchGroupRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.GetPatchBaselineForPatchGroupRequest getPatchBaselineForPatchGroupRequest;

    public GetPatchBaselineForPatchGroupRequest withGetPatchBaselineForPatchGroupRequest(org.openapis.openapi.models.shared.GetPatchBaselineForPatchGroupRequest getPatchBaselineForPatchGroupRequest) {
        this.getPatchBaselineForPatchGroupRequest = getPatchBaselineForPatchGroupRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GetPatchBaselineForPatchGroupRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GetPatchBaselineForPatchGroupRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GetPatchBaselineForPatchGroupRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GetPatchBaselineForPatchGroupRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GetPatchBaselineForPatchGroupRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GetPatchBaselineForPatchGroupRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GetPatchBaselineForPatchGroupRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public GetPatchBaselineForPatchGroupXAmzTargetEnum xAmzTarget;

    public GetPatchBaselineForPatchGroupRequest withXAmzTarget(GetPatchBaselineForPatchGroupXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public GetPatchBaselineForPatchGroupRequest(@JsonProperty("GetPatchBaselineForPatchGroupRequest") org.openapis.openapi.models.shared.GetPatchBaselineForPatchGroupRequest getPatchBaselineForPatchGroupRequest, @JsonProperty("X-Amz-Target") GetPatchBaselineForPatchGroupXAmzTargetEnum xAmzTarget) {
        this.getPatchBaselineForPatchGroupRequest = getPatchBaselineForPatchGroupRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
