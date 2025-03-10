/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DisassociateMacSecKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.DisassociateMacSecKeyRequest disassociateMacSecKeyRequest;

    public DisassociateMacSecKeyRequest withDisassociateMacSecKeyRequest(org.openapis.openapi.models.shared.DisassociateMacSecKeyRequest disassociateMacSecKeyRequest) {
        this.disassociateMacSecKeyRequest = disassociateMacSecKeyRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public DisassociateMacSecKeyRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public DisassociateMacSecKeyRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public DisassociateMacSecKeyRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public DisassociateMacSecKeyRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public DisassociateMacSecKeyRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public DisassociateMacSecKeyRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public DisassociateMacSecKeyRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public DisassociateMacSecKeyXAmzTargetEnum xAmzTarget;

    public DisassociateMacSecKeyRequest withXAmzTarget(DisassociateMacSecKeyXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public DisassociateMacSecKeyRequest(@JsonProperty("DisassociateMacSecKeyRequest") org.openapis.openapi.models.shared.DisassociateMacSecKeyRequest disassociateMacSecKeyRequest, @JsonProperty("X-Amz-Target") DisassociateMacSecKeyXAmzTargetEnum xAmzTarget) {
        this.disassociateMacSecKeyRequest = disassociateMacSecKeyRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
