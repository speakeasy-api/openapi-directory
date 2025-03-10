/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeLoadBalancerAttributesInput - Contains the parameters for DescribeLoadBalancerAttributes.
 */
public class DescribeLoadBalancerAttributesInput {
    
    public String loadBalancerName;

    public DescribeLoadBalancerAttributesInput withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    
    public DescribeLoadBalancerAttributesInput(@JsonProperty("LoadBalancerName") String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
  }
}
