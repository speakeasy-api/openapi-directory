/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SetDefaultSenderIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.SetDefaultSenderIdRequest setDefaultSenderIdRequest;

    public SetDefaultSenderIdRequest withSetDefaultSenderIdRequest(org.openapis.openapi.models.shared.SetDefaultSenderIdRequest setDefaultSenderIdRequest) {
        this.setDefaultSenderIdRequest = setDefaultSenderIdRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public SetDefaultSenderIdRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public SetDefaultSenderIdRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public SetDefaultSenderIdRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public SetDefaultSenderIdRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public SetDefaultSenderIdRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public SetDefaultSenderIdRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public SetDefaultSenderIdRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public SetDefaultSenderIdXAmzTargetEnum xAmzTarget;

    public SetDefaultSenderIdRequest withXAmzTarget(SetDefaultSenderIdXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public SetDefaultSenderIdRequest(@JsonProperty("SetDefaultSenderIdRequest") org.openapis.openapi.models.shared.SetDefaultSenderIdRequest setDefaultSenderIdRequest, @JsonProperty("X-Amz-Target") SetDefaultSenderIdXAmzTargetEnum xAmzTarget) {
        this.setDefaultSenderIdRequest = setDefaultSenderIdRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
