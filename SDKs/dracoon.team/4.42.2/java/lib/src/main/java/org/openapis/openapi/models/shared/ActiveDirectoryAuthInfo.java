/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActiveDirectoryAuthInfo - List of Active Directories
 */
public class ActiveDirectoryAuthInfo {
    /**
     * List of available Active Directories
     */
    @JsonProperty("items")
    public ActiveDirectory[] items;
    public ActiveDirectoryAuthInfo withItems(ActiveDirectory[] items) {
        this.items = items;
        return this;
    }
    
}
