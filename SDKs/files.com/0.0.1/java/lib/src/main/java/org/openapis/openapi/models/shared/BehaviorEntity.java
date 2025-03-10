/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BehaviorEntity - List Behaviors
 */
public class BehaviorEntity {
    /**
     * URL for attached file
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment_url")
    public String attachmentUrl;

    public BehaviorEntity withAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
        return this;
    }
    
    /**
     * Behavior type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behavior")
    public String behavior;

    public BehaviorEntity withBehavior(String behavior) {
        this.behavior = behavior;
        return this;
    }
    
    /**
     * Description for this behavior.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public BehaviorEntity withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Folder behavior ID
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;

    public BehaviorEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    
    /**
     * Name for this behavior.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public BehaviorEntity withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Folder path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;

    public BehaviorEntity withPath(String path) {
        this.path = path;
        return this;
    }
    
    /**
     * Settings for this behavior.  See the section above for an example value to provide here.  Formatting is different for each Behavior type.  May be sent as nested JSON or a single JSON-encoded string.  If using XML encoding for the API call, this data must be sent as a JSON-encoded string.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;

    public BehaviorEntity withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
    
    public BehaviorEntity(){}
}
