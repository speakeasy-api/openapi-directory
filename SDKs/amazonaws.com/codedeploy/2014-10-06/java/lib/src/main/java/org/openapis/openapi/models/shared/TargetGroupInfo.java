/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TargetGroupInfo - Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.
 */
public class TargetGroupInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public TargetGroupInfo withName(String name) {
        this.name = name;
        return this;
    }
    
    public TargetGroupInfo(){}
}
