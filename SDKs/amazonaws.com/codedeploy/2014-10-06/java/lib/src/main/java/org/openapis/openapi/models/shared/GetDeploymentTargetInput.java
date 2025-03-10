/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDeploymentTargetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;

    public GetDeploymentTargetInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;

    public GetDeploymentTargetInput withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    
    public GetDeploymentTargetInput(){}
}
