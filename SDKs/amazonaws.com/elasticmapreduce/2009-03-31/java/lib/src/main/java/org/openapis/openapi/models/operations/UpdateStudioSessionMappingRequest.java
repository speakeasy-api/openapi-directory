/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateStudioSessionMappingRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.UpdateStudioSessionMappingInput updateStudioSessionMappingInput;

    public UpdateStudioSessionMappingRequest withUpdateStudioSessionMappingInput(org.openapis.openapi.models.shared.UpdateStudioSessionMappingInput updateStudioSessionMappingInput) {
        this.updateStudioSessionMappingInput = updateStudioSessionMappingInput;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public UpdateStudioSessionMappingRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public UpdateStudioSessionMappingRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public UpdateStudioSessionMappingRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public UpdateStudioSessionMappingRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public UpdateStudioSessionMappingRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public UpdateStudioSessionMappingRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public UpdateStudioSessionMappingRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public UpdateStudioSessionMappingXAmzTargetEnum xAmzTarget;

    public UpdateStudioSessionMappingRequest withXAmzTarget(UpdateStudioSessionMappingXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public UpdateStudioSessionMappingRequest(@JsonProperty("UpdateStudioSessionMappingInput") org.openapis.openapi.models.shared.UpdateStudioSessionMappingInput updateStudioSessionMappingInput, @JsonProperty("X-Amz-Target") UpdateStudioSessionMappingXAmzTargetEnum xAmzTarget) {
        this.updateStudioSessionMappingInput = updateStudioSessionMappingInput;
        this.xAmzTarget = xAmzTarget;
  }
}
