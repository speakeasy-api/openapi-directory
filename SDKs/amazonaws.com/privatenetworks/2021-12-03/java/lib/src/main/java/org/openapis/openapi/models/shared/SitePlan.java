/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SitePlan - Information about a site plan.
 */
public class SitePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public NameValuePair[] options;

    public SitePlan withOptions(NameValuePair[] options) {
        this.options = options;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceDefinitions")
    public NetworkResourceDefinition[] resourceDefinitions;

    public SitePlan withResourceDefinitions(NetworkResourceDefinition[] resourceDefinitions) {
        this.resourceDefinitions = resourceDefinitions;
        return this;
    }
    
    public SitePlan(){}
}
