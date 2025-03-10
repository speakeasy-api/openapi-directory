/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PipelineConfig - The pipeline configuration for a resolver of kind &lt;code&gt;PIPELINE&lt;/code&gt;.
 */
public class PipelineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public String[] functions;

    public PipelineConfig withFunctions(String[] functions) {
        this.functions = functions;
        return this;
    }
    
    public PipelineConfig(){}
}
