/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RemoveTagsFromResourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.RemoveTagsFromResourceMessage removeTagsFromResourceMessage;

    public RemoveTagsFromResourceRequest withRemoveTagsFromResourceMessage(org.openapis.openapi.models.shared.RemoveTagsFromResourceMessage removeTagsFromResourceMessage) {
        this.removeTagsFromResourceMessage = removeTagsFromResourceMessage;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public RemoveTagsFromResourceRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public RemoveTagsFromResourceRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public RemoveTagsFromResourceRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public RemoveTagsFromResourceRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public RemoveTagsFromResourceRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public RemoveTagsFromResourceRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public RemoveTagsFromResourceRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public RemoveTagsFromResourceXAmzTargetEnum xAmzTarget;

    public RemoveTagsFromResourceRequest withXAmzTarget(RemoveTagsFromResourceXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public RemoveTagsFromResourceRequest(@JsonProperty("RemoveTagsFromResourceMessage") org.openapis.openapi.models.shared.RemoveTagsFromResourceMessage removeTagsFromResourceMessage, @JsonProperty("X-Amz-Target") RemoveTagsFromResourceXAmzTargetEnum xAmzTarget) {
        this.removeTagsFromResourceMessage = removeTagsFromResourceMessage;
        this.xAmzTarget = xAmzTarget;
  }
}
