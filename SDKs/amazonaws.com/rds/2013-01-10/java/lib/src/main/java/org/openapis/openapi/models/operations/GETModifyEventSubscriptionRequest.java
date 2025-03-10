/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETModifyEventSubscriptionRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETModifyEventSubscriptionActionEnum action;

    public GETModifyEventSubscriptionRequest withAction(GETModifyEventSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Enabled")
    public Boolean enabled;

    public GETModifyEventSubscriptionRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventCategories")
    public String[] eventCategories;

    public GETModifyEventSubscriptionRequest withEventCategories(String[] eventCategories) {
        this.eventCategories = eventCategories;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnsTopicArn")
    public String snsTopicArn;

    public GETModifyEventSubscriptionRequest withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceType")
    public String sourceType;

    public GETModifyEventSubscriptionRequest withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubscriptionName")
    public String subscriptionName;

    public GETModifyEventSubscriptionRequest withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETModifyEventSubscriptionVersionEnum version;

    public GETModifyEventSubscriptionRequest withVersion(GETModifyEventSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETModifyEventSubscriptionRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETModifyEventSubscriptionRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETModifyEventSubscriptionRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETModifyEventSubscriptionRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETModifyEventSubscriptionRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETModifyEventSubscriptionRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETModifyEventSubscriptionRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETModifyEventSubscriptionRequest(@JsonProperty("Action") GETModifyEventSubscriptionActionEnum action, @JsonProperty("SubscriptionName") String subscriptionName, @JsonProperty("Version") GETModifyEventSubscriptionVersionEnum version) {
        this.action = action;
        this.subscriptionName = subscriptionName;
        this.version = version;
  }
}
