/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LoadBalancer - &lt;p&gt;The load balancer configuration to use with a service or task set.&lt;/p&gt; &lt;p&gt;When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.&lt;/p&gt; &lt;p&gt;We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration. &lt;/p&gt; &lt;p&gt;A service-linked role is required for services that use multiple target groups. For more information, see &lt;a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html"&gt;Using service-linked roles&lt;/a&gt; in the &lt;i&gt;Amazon Elastic Container Service Developer Guide&lt;/i&gt;.&lt;/p&gt;
 */
public class LoadBalancer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerName")
    public String containerName;

    public LoadBalancer withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Long containerPort;

    public LoadBalancer withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;

    public LoadBalancer withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroupArn")
    public String targetGroupArn;

    public LoadBalancer withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
    
    public LoadBalancer(){}
}
