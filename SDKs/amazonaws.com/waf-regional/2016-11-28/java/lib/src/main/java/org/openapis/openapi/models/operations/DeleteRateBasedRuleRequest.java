/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteRateBasedRuleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.DeleteRateBasedRuleRequest deleteRateBasedRuleRequest;

    public DeleteRateBasedRuleRequest withDeleteRateBasedRuleRequest(org.openapis.openapi.models.shared.DeleteRateBasedRuleRequest deleteRateBasedRuleRequest) {
        this.deleteRateBasedRuleRequest = deleteRateBasedRuleRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public DeleteRateBasedRuleRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public DeleteRateBasedRuleRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public DeleteRateBasedRuleRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public DeleteRateBasedRuleRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public DeleteRateBasedRuleRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public DeleteRateBasedRuleRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public DeleteRateBasedRuleRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public DeleteRateBasedRuleXAmzTargetEnum xAmzTarget;

    public DeleteRateBasedRuleRequest withXAmzTarget(DeleteRateBasedRuleXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public DeleteRateBasedRuleRequest(@JsonProperty("DeleteRateBasedRuleRequest") org.openapis.openapi.models.shared.DeleteRateBasedRuleRequest deleteRateBasedRuleRequest, @JsonProperty("X-Amz-Target") DeleteRateBasedRuleXAmzTargetEnum xAmzTarget) {
        this.deleteRateBasedRuleRequest = deleteRateBasedRuleRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
