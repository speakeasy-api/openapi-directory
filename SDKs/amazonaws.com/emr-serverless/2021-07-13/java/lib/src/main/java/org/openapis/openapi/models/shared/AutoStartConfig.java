/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AutoStartConfig - The configuration for an application to automatically start on job submission.
 */
public class AutoStartConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public AutoStartConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    public AutoStartConfig(){}
}
