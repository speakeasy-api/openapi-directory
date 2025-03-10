/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RequestServiceQuotaIncreaseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.RequestServiceQuotaIncreaseRequest requestServiceQuotaIncreaseRequest;

    public RequestServiceQuotaIncreaseRequest withRequestServiceQuotaIncreaseRequest(org.openapis.openapi.models.shared.RequestServiceQuotaIncreaseRequest requestServiceQuotaIncreaseRequest) {
        this.requestServiceQuotaIncreaseRequest = requestServiceQuotaIncreaseRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public RequestServiceQuotaIncreaseRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public RequestServiceQuotaIncreaseRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public RequestServiceQuotaIncreaseRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public RequestServiceQuotaIncreaseRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public RequestServiceQuotaIncreaseRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public RequestServiceQuotaIncreaseRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public RequestServiceQuotaIncreaseRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public RequestServiceQuotaIncreaseXAmzTargetEnum xAmzTarget;

    public RequestServiceQuotaIncreaseRequest withXAmzTarget(RequestServiceQuotaIncreaseXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public RequestServiceQuotaIncreaseRequest(@JsonProperty("RequestServiceQuotaIncreaseRequest") org.openapis.openapi.models.shared.RequestServiceQuotaIncreaseRequest requestServiceQuotaIncreaseRequest, @JsonProperty("X-Amz-Target") RequestServiceQuotaIncreaseXAmzTargetEnum xAmzTarget) {
        this.requestServiceQuotaIncreaseRequest = requestServiceQuotaIncreaseRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
