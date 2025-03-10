/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimerDefinition - The new setting of a timer.
 */
public class TimerDefinition {
    @JsonProperty("name")
    public String name;

    public TimerDefinition withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonProperty("seconds")
    public Long seconds;

    public TimerDefinition withSeconds(Long seconds) {
        this.seconds = seconds;
        return this;
    }
    
    public TimerDefinition(@JsonProperty("name") String name, @JsonProperty("seconds") Long seconds) {
        this.name = name;
        this.seconds = seconds;
  }
}
