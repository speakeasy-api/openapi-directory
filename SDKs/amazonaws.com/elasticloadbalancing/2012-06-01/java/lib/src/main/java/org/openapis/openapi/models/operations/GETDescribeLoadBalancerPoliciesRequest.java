/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETDescribeLoadBalancerPoliciesRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETDescribeLoadBalancerPoliciesActionEnum action;

    public GETDescribeLoadBalancerPoliciesRequest withAction(GETDescribeLoadBalancerPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * The name of the load balancer.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;

    public GETDescribeLoadBalancerPoliciesRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    
    /**
     * The names of the policies.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyNames")
    public String[] policyNames;

    public GETDescribeLoadBalancerPoliciesRequest withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETDescribeLoadBalancerPoliciesVersionEnum version;

    public GETDescribeLoadBalancerPoliciesRequest withVersion(GETDescribeLoadBalancerPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETDescribeLoadBalancerPoliciesRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETDescribeLoadBalancerPoliciesRequest(@JsonProperty("Action") GETDescribeLoadBalancerPoliciesActionEnum action, @JsonProperty("Version") GETDescribeLoadBalancerPoliciesVersionEnum version) {
        this.action = action;
        this.version = version;
  }
}
