/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductModelHaljsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public String configs;

    public ProductModelHaljsonLinks withConfigs(String configs) {
        this.configs = configs;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public String environments;

    public ProductModelHaljsonLinks withEnvironments(String environments) {
        this.environments = environments;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String members;

    public ProductModelHaljsonLinks withMembers(String members) {
        this.members = members;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission-groups")
    public String permissionGroups;

    public ProductModelHaljsonLinks withPermissionGroups(String permissionGroups) {
        this.permissionGroups = permissionGroups;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public String segments;

    public ProductModelHaljsonLinks withSegments(String segments) {
        this.segments = segments;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;

    public ProductModelHaljsonLinks withSelf(String self) {
        this.self = self;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String tags;

    public ProductModelHaljsonLinks withTags(String tags) {
        this.tags = tags;
        return this;
    }
    
    public ProductModelHaljsonLinks(){}
}
