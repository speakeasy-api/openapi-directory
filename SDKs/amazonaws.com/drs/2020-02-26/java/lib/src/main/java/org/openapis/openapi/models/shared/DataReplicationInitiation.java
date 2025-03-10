/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DataReplicationInitiation - Data replication initiation.
 */
public class DataReplicationInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextAttemptDateTime")
    public String nextAttemptDateTime;

    public DataReplicationInitiation withNextAttemptDateTime(String nextAttemptDateTime) {
        this.nextAttemptDateTime = nextAttemptDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDateTime")
    public String startDateTime;

    public DataReplicationInitiation withStartDateTime(String startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public DataReplicationInitiationStep[] steps;

    public DataReplicationInitiation withSteps(DataReplicationInitiationStep[] steps) {
        this.steps = steps;
        return this;
    }
    
    public DataReplicationInitiation(){}
}
