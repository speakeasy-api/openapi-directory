/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UnprocessedGraph - Behavior graphs that could not be processed in the request.
 */
public class UnprocessedGraph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GraphArn")
    public String graphArn;

    public UnprocessedGraph withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;

    public UnprocessedGraph withReason(String reason) {
        this.reason = reason;
        return this;
    }
    
    public UnprocessedGraph(){}
}
