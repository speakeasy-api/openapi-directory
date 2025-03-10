/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Episode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public EpisodeAttributes attributes;

    public Episode withAttributes(EpisodeAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Episode withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public EpisodeRelationships relationships;

    public Episode withRelationships(EpisodeRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    
    /**
     * The type of resource. This is always `episodes`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public Episode withType(String type) {
        this.type = type;
        return this;
    }
    
    public Episode(){}
}
