/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class POSTUpdateStackInstancesRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public POSTUpdateStackInstancesActionEnum action;

    public POSTUpdateStackInstancesRequest withAction(POSTUpdateStackInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] requestBody;

    public POSTUpdateStackInstancesRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public POSTUpdateStackInstancesVersionEnum version;

    public POSTUpdateStackInstancesRequest withVersion(POSTUpdateStackInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public POSTUpdateStackInstancesRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public POSTUpdateStackInstancesRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public POSTUpdateStackInstancesRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public POSTUpdateStackInstancesRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public POSTUpdateStackInstancesRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public POSTUpdateStackInstancesRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public POSTUpdateStackInstancesRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public POSTUpdateStackInstancesRequest(@JsonProperty("Action") POSTUpdateStackInstancesActionEnum action, @JsonProperty("Version") POSTUpdateStackInstancesVersionEnum version) {
        this.action = action;
        this.version = version;
  }
}
