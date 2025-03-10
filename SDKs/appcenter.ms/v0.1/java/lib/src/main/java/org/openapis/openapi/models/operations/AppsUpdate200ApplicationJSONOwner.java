/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppsUpdate200ApplicationJSONOwner - The information about the app's owner
 */
public class AppsUpdate200ApplicationJSONOwner {
    /**
     * The avatar URL of the owner
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;

    public AppsUpdate200ApplicationJSONOwner withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    
    /**
     * The owner's display name
     */
    @JsonProperty("display_name")
    public String displayName;

    public AppsUpdate200ApplicationJSONOwner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    
    /**
     * The owner's email address
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;

    public AppsUpdate200ApplicationJSONOwner withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * The unique id (UUID) of the owner
     */
    @JsonProperty("id")
    public String id;

    public AppsUpdate200ApplicationJSONOwner withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The unique name that used to identify the owner
     */
    @JsonProperty("name")
    public String name;

    public AppsUpdate200ApplicationJSONOwner withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The owner type. Can either be 'org' or 'user'
     */
    @JsonProperty("type")
    public AppsUpdate200ApplicationJSONOwnerTypeEnum type;

    public AppsUpdate200ApplicationJSONOwner withType(AppsUpdate200ApplicationJSONOwnerTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public AppsUpdate200ApplicationJSONOwner(@JsonProperty("display_name") String displayName, @JsonProperty("id") String id, @JsonProperty("name") String name, @JsonProperty("type") AppsUpdate200ApplicationJSONOwnerTypeEnum type) {
        this.displayName = displayName;
        this.id = id;
        this.name = name;
        this.type = type;
  }
}
