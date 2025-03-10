/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimeInNanos - Contains a timestamp with optional nanosecond granularity.
 */
public class TimeInNanos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetInNanos")
    public Long offsetInNanos;

    public TimeInNanos withOffsetInNanos(Long offsetInNanos) {
        this.offsetInNanos = offsetInNanos;
        return this;
    }
    
    @JsonProperty("timeInSeconds")
    public Long timeInSeconds;

    public TimeInNanos withTimeInSeconds(Long timeInSeconds) {
        this.timeInSeconds = timeInSeconds;
        return this;
    }
    
    public TimeInNanos(@JsonProperty("timeInSeconds") Long timeInSeconds) {
        this.timeInSeconds = timeInSeconds;
  }
}
