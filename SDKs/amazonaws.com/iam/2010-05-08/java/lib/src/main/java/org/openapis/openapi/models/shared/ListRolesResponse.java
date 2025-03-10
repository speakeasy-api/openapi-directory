/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListRolesResponse - Contains the response to a successful &lt;a&gt;ListRoles&lt;/a&gt; request. 
 */
public class ListRolesResponse {
    
    public Boolean isTruncated;

    public ListRolesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    
    
    public String marker;

    public ListRolesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    
    public Role[] roles;

    public ListRolesResponse withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
    
    public ListRolesResponse(@JsonProperty("Roles") Role[] roles) {
        this.roles = roles;
  }
}
