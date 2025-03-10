/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnifiedId {
    /**
     * The unique identifier of the resource
     */
    @JsonProperty("id")
    public String id;

    public UnifiedId withId(String id) {
        this.id = id;
        return this;
    }
    
    public UnifiedId(@JsonProperty("id") String id) {
        this.id = id;
  }
}
