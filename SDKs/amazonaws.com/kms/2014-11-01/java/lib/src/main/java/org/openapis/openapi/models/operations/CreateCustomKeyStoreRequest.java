/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateCustomKeyStoreRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.CreateCustomKeyStoreRequest createCustomKeyStoreRequest;

    public CreateCustomKeyStoreRequest withCreateCustomKeyStoreRequest(org.openapis.openapi.models.shared.CreateCustomKeyStoreRequest createCustomKeyStoreRequest) {
        this.createCustomKeyStoreRequest = createCustomKeyStoreRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public CreateCustomKeyStoreRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public CreateCustomKeyStoreRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public CreateCustomKeyStoreRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public CreateCustomKeyStoreRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public CreateCustomKeyStoreRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public CreateCustomKeyStoreRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public CreateCustomKeyStoreRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public CreateCustomKeyStoreXAmzTargetEnum xAmzTarget;

    public CreateCustomKeyStoreRequest withXAmzTarget(CreateCustomKeyStoreXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public CreateCustomKeyStoreRequest(@JsonProperty("CreateCustomKeyStoreRequest") org.openapis.openapi.models.shared.CreateCustomKeyStoreRequest createCustomKeyStoreRequest, @JsonProperty("X-Amz-Target") CreateCustomKeyStoreXAmzTargetEnum xAmzTarget) {
        this.createCustomKeyStoreRequest = createCustomKeyStoreRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
