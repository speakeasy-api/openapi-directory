/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * SessionStatus - Contains information about the status of a session.
 */
public class SessionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndDateTime")
    public OffsetDateTime endDateTime;

    public SessionStatus withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("IdleSinceDateTime")
    public OffsetDateTime idleSinceDateTime;

    public SessionStatus withIdleSinceDateTime(OffsetDateTime idleSinceDateTime) {
        this.idleSinceDateTime = idleSinceDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDateTime")
    public OffsetDateTime lastModifiedDateTime;

    public SessionStatus withLastModifiedDateTime(OffsetDateTime lastModifiedDateTime) {
        this.lastModifiedDateTime = lastModifiedDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartDateTime")
    public OffsetDateTime startDateTime;

    public SessionStatus withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public SessionStateEnum state;

    public SessionStatus withState(SessionStateEnum state) {
        this.state = state;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateChangeReason")
    public String stateChangeReason;

    public SessionStatus withStateChangeReason(String stateChangeReason) {
        this.stateChangeReason = stateChangeReason;
        return this;
    }
    
    public SessionStatus(){}
}
