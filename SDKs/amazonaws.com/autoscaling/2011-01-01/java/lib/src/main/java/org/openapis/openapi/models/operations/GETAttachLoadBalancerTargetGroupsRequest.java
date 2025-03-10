/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETAttachLoadBalancerTargetGroupsRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GETAttachLoadBalancerTargetGroupsActionEnum action;

    public GETAttachLoadBalancerTargetGroupsRequest withAction(GETAttachLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * The name of the Auto Scaling group.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;

    public GETAttachLoadBalancerTargetGroupsRequest withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    
    /**
     * The Amazon Resource Names (ARNs) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing &lt;a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html"&gt;DescribeTargetGroups&lt;/a&gt; API operation.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupARNs")
    public String[] targetGroupARNs;

    public GETAttachLoadBalancerTargetGroupsRequest withTargetGroupARNs(String[] targetGroupARNs) {
        this.targetGroupARNs = targetGroupARNs;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GETAttachLoadBalancerTargetGroupsVersionEnum version;

    public GETAttachLoadBalancerTargetGroupsRequest withVersion(GETAttachLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GETAttachLoadBalancerTargetGroupsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public GETAttachLoadBalancerTargetGroupsRequest(@JsonProperty("Action") GETAttachLoadBalancerTargetGroupsActionEnum action, @JsonProperty("AutoScalingGroupName") String autoScalingGroupName, @JsonProperty("TargetGroupARNs") String[] targetGroupARNs, @JsonProperty("Version") GETAttachLoadBalancerTargetGroupsVersionEnum version) {
        this.action = action;
        this.autoScalingGroupName = autoScalingGroupName;
        this.targetGroupARNs = targetGroupARNs;
        this.version = version;
  }
}
