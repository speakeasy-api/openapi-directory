/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class POSTDeleteApplicationVersionRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public POSTDeleteApplicationVersionActionEnum action;

    public POSTDeleteApplicationVersionRequest withAction(POSTDeleteApplicationVersionActionEnum action) {
        this.action = action;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] requestBody;

    public POSTDeleteApplicationVersionRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public POSTDeleteApplicationVersionVersionEnum version;

    public POSTDeleteApplicationVersionRequest withVersion(POSTDeleteApplicationVersionVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public POSTDeleteApplicationVersionRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public POSTDeleteApplicationVersionRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public POSTDeleteApplicationVersionRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public POSTDeleteApplicationVersionRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public POSTDeleteApplicationVersionRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public POSTDeleteApplicationVersionRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public POSTDeleteApplicationVersionRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public POSTDeleteApplicationVersionRequest(@JsonProperty("Action") POSTDeleteApplicationVersionActionEnum action, @JsonProperty("Version") POSTDeleteApplicationVersionVersionEnum version) {
        this.action = action;
        this.version = version;
  }
}
