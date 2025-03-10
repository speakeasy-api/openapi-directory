/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Session - Provides information about a session.
 */
public class Session {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Duration")
    public Long duration;

    public Session withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    
    @JsonProperty("Id")
    public String id;

    public Session withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("StartTimestamp")
    public String startTimestamp;

    public Session withStartTimestamp(String startTimestamp) {
        this.startTimestamp = startTimestamp;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopTimestamp")
    public String stopTimestamp;

    public Session withStopTimestamp(String stopTimestamp) {
        this.stopTimestamp = stopTimestamp;
        return this;
    }
    
    public Session(@JsonProperty("Id") String id, @JsonProperty("StartTimestamp") String startTimestamp) {
        this.id = id;
        this.startTimestamp = startTimestamp;
  }
}
