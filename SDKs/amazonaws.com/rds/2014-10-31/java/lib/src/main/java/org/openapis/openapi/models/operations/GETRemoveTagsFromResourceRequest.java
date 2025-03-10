/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETRemoveTagsFromResourceRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETRemoveTagsFromResourceActionEnum action;

    public GETRemoveTagsFromResourceRequest withAction(GETRemoveTagsFromResourceActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see &lt;a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"&gt; Constructing an ARN for Amazon RDS&lt;/a&gt; in the &lt;i&gt;Amazon RDS User Guide.&lt;/i&gt; 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceName")
    public String resourceName;

    public GETRemoveTagsFromResourceRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    
    /**
     * The tag key (name) of the tag to be removed.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;

    public GETRemoveTagsFromResourceRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETRemoveTagsFromResourceVersionEnum version;

    public GETRemoveTagsFromResourceRequest withVersion(GETRemoveTagsFromResourceVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETRemoveTagsFromResourceRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETRemoveTagsFromResourceRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETRemoveTagsFromResourceRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETRemoveTagsFromResourceRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETRemoveTagsFromResourceRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETRemoveTagsFromResourceRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETRemoveTagsFromResourceRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETRemoveTagsFromResourceRequest(@JsonProperty("Action") GETRemoveTagsFromResourceActionEnum action, @JsonProperty("ResourceName") String resourceName, @JsonProperty("TagKeys") String[] tagKeys, @JsonProperty("Version") GETRemoveTagsFromResourceVersionEnum version) {
        this.action = action;
        this.resourceName = resourceName;
        this.tagKeys = tagKeys;
        this.version = version;
  }
}
