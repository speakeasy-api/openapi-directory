/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class StartCutoverRequestBody {
    /**
     * Start Cutover by Source Server IDs.
     */
    @JsonProperty("sourceServerIDs")
    public String[] sourceServerIDs;

    public StartCutoverRequestBody withSourceServerIDs(String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
        return this;
    }
    
    /**
     * Start Cutover by Tags.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;

    public StartCutoverRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    
    public StartCutoverRequestBody(@JsonProperty("sourceServerIDs") String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
  }
}
