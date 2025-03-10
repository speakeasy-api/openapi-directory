/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETListStackSetsRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETListStackSetsActionEnum action;

    public GETListStackSetsRequest withAction(GETListStackSetsActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * &lt;p&gt;[Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account.&lt;/p&gt; &lt;p&gt;By default, &lt;code&gt;SELF&lt;/code&gt; is specified. Use &lt;code&gt;SELF&lt;/code&gt; for stack sets with self-managed permissions.&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;If you are signed in to the management account, specify &lt;code&gt;SELF&lt;/code&gt;.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;If you are signed in to a delegated administrator account, specify &lt;code&gt;DELEGATED_ADMIN&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see &lt;a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html"&gt;Register a delegated administrator&lt;/a&gt; in the &lt;i&gt;CloudFormation User Guide&lt;/i&gt;.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CallAs")
    public GETListStackSetsCallAsEnum callAs;

    public GETListStackSetsRequest withCallAs(GETListStackSetsCallAsEnum callAs) {
        this.callAs = callAs;
        return this;
    }
    
    /**
     * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a &lt;code&gt;NextToken&lt;/code&gt; value that you can assign to the &lt;code&gt;NextToken&lt;/code&gt; request parameter to get the next set of results.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;

    public GETListStackSetsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * If the previous paginated request didn't return all the remaining results, the response object's &lt;code&gt;NextToken&lt;/code&gt; parameter value is set to a token. To retrieve the next set of results, call &lt;code&gt;ListStackSets&lt;/code&gt; again and assign that token to the request object's &lt;code&gt;NextToken&lt;/code&gt; parameter. If there are no remaining results, the previous response object's &lt;code&gt;NextToken&lt;/code&gt; parameter is set to &lt;code&gt;null&lt;/code&gt;.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;

    public GETListStackSetsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    /**
     * The status of the stack sets that you want to get summary information about.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GETListStackSetsStatusEnum status;

    public GETListStackSetsRequest withStatus(GETListStackSetsStatusEnum status) {
        this.status = status;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETListStackSetsVersionEnum version;

    public GETListStackSetsRequest withVersion(GETListStackSetsVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETListStackSetsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETListStackSetsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETListStackSetsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETListStackSetsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETListStackSetsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETListStackSetsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETListStackSetsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETListStackSetsRequest(@JsonProperty("Action") GETListStackSetsActionEnum action, @JsonProperty("Version") GETListStackSetsVersionEnum version) {
        this.action = action;
        this.version = version;
  }
}
