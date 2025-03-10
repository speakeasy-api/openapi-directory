/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TerminateTargetInstancesRequestBody {
    /**
     * Terminate Target instance by Source Server IDs.
     */
    @JsonProperty("sourceServerIDs")
    public String[] sourceServerIDs;

    public TerminateTargetInstancesRequestBody withSourceServerIDs(String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
        return this;
    }
    
    /**
     * Terminate Target instance by Tags.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;

    public TerminateTargetInstancesRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    
    public TerminateTargetInstancesRequestBody(@JsonProperty("sourceServerIDs") String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
  }
}
