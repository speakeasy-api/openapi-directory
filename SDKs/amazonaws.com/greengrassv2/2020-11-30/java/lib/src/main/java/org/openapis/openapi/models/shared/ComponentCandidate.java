/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ComponentCandidate - Contains information about a component that is a candidate to deploy to a Greengrass core device.
 */
public class ComponentCandidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentName")
    public String componentName;

    public ComponentCandidate withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public String componentVersion;

    public ComponentCandidate withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionRequirements")
    public java.util.Map<String, String> versionRequirements;

    public ComponentCandidate withVersionRequirements(java.util.Map<String, String> versionRequirements) {
        this.versionRequirements = versionRequirements;
        return this;
    }
    
    public ComponentCandidate(){}
}
