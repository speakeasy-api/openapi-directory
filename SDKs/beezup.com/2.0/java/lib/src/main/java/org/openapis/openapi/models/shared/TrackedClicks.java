/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackedClicks - Click list
 */
public class TrackedClicks {
    @JsonProperty("clicks")
    public TrackedClick[] clicks;

    public TrackedClicks withClicks(TrackedClick[] clicks) {
        this.clicks = clicks;
        return this;
    }
    
    public TrackedClicks(@JsonProperty("clicks") TrackedClick[] clicks) {
        this.clicks = clicks;
  }
}
