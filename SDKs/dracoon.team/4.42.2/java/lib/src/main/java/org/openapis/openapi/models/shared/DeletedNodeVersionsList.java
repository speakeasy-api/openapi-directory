/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeletedNodeVersionsList - List of deleted versions of nodes
 */
public class DeletedNodeVersionsList {
    /**
     * List of deleted nodes
     */
    @JsonProperty("items")
    public DeletedNode[] items;
    public DeletedNodeVersionsList withItems(DeletedNode[] items) {
        this.items = items;
        return this;
    }
    
    /**
     * Range information
     */
    @JsonProperty("range")
    public Range range;
    public DeletedNodeVersionsList withRange(Range range) {
        this.range = range;
        return this;
    }
    
}
