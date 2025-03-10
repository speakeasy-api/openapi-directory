/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETGETServiceLastAccessedDetailsWithEntitiesRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETGETServiceLastAccessedDetailsWithEntitiesActionEnum action;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withAction(GETGETServiceLastAccessedDetailsWithEntitiesActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * The ID of the request generated by the &lt;code&gt;GenerateServiceLastAccessedDetails&lt;/code&gt; operation.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobId")
    public String jobId;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the &lt;code&gt;Marker&lt;/code&gt; element in the response that you received to indicate where the next call should start.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    /**
     * &lt;p&gt;Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the &lt;code&gt;IsTruncated&lt;/code&gt; response element is &lt;code&gt;true&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the &lt;code&gt;IsTruncated&lt;/code&gt; response element returns &lt;code&gt;true&lt;/code&gt;, and &lt;code&gt;Marker&lt;/code&gt; contains a value to include in the subsequent call that tells the service where to continue from.&lt;/p&gt;
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    
    /**
     * &lt;p&gt;The service namespace for an Amazon Web Services service. Provide the service namespace to learn when the IAM entity last attempted to access the specified service.&lt;/p&gt; &lt;p&gt;To learn the service namespace for a service, see &lt;a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html"&gt;Actions, resources, and condition keys for Amazon Web Services services&lt;/a&gt; in the &lt;i&gt;IAM User Guide&lt;/i&gt;. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, &lt;code&gt;(service prefix: a4b)&lt;/code&gt;. For more information about service namespaces, see &lt;a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces"&gt;Amazon Web Services service namespaces&lt;/a&gt; in the\u00a0&lt;i&gt;Amazon Web Services General Reference&lt;/i&gt;.&lt;/p&gt;
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceNamespace")
    public String serviceNamespace;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withServiceNamespace(String serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum version;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withVersion(GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETGETServiceLastAccessedDetailsWithEntitiesRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETGETServiceLastAccessedDetailsWithEntitiesRequest(@JsonProperty("Action") GETGETServiceLastAccessedDetailsWithEntitiesActionEnum action, @JsonProperty("JobId") String jobId, @JsonProperty("ServiceNamespace") String serviceNamespace, @JsonProperty("Version") GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum version) {
        this.action = action;
        this.jobId = jobId;
        this.serviceNamespace = serviceNamespace;
        this.version = version;
  }
}
