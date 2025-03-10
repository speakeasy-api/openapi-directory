/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateDeploymentConfigOutput - Represents the output of a &lt;code&gt;CreateDeploymentConfig&lt;/code&gt; operation.
 */
public class CreateDeploymentConfigOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigId")
    public String deploymentConfigId;

    public CreateDeploymentConfigOutput withDeploymentConfigId(String deploymentConfigId) {
        this.deploymentConfigId = deploymentConfigId;
        return this;
    }
    
    public CreateDeploymentConfigOutput(){}
}
