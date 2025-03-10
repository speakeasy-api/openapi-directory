/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CopyNodesRequest - Request model for copying nodes
 */
public class CopyNodesRequest {
    /**
     * List of nodes to be copied
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CopyNode[] items;
    public CopyNodesRequest withItems(CopyNode[] items) {
        this.items = items;
        return this;
    }
    
    /**
     * Preserve Download Share Links and point them to the new node.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keepShareLinks")
    public Boolean keepShareLinks;
    public CopyNodesRequest withKeepShareLinks(Boolean keepShareLinks) {
        this.keepShareLinks = keepShareLinks;
        return this;
    }
    
    /**
     * &amp;#128679; Deprecated since v4.5.0
     * 
     * Node IDs
     * 
     * Please use `items` instead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeIds")
    public Long[] nodeIds;
    public CopyNodesRequest withNodeIds(Long[] nodeIds) {
        this.nodeIds = nodeIds;
        return this;
    }
    
    /**
     * Node conflict resolution strategy:
     * 
     * * `autorename`
     * 
     * * `overwrite`
     * 
     * * `fail`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolutionStrategy")
    public CopyNodesRequestResolutionStrategyEnum resolutionStrategy;
    public CopyNodesRequest withResolutionStrategy(CopyNodesRequestResolutionStrategyEnum resolutionStrategy) {
        this.resolutionStrategy = resolutionStrategy;
        return this;
    }
    
}
