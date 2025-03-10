/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GeneratedPolicyResult - Contains the text for the generated policy and its details.
 */
public class GeneratedPolicyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedPolicies")
    public GeneratedPolicy[] generatedPolicies;

    public GeneratedPolicyResult withGeneratedPolicies(GeneratedPolicy[] generatedPolicies) {
        this.generatedPolicies = generatedPolicies;
        return this;
    }
    
    /**
     * A &lt;code&gt;GeneratedPolicyProperties&lt;/code&gt; object that contains properties of the generated policy.
     */
    @JsonProperty("properties")
    public Object properties;

    public GeneratedPolicyResult withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    
    public GeneratedPolicyResult(@JsonProperty("properties") Object properties) {
        this.properties = properties;
  }
}
