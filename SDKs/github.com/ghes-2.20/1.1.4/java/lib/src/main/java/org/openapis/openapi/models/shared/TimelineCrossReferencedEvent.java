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
 * TimelineCrossReferencedEvent - Timeline Cross Referenced Event
 */
public class TimelineCrossReferencedEvent {
    /**
     * Simple User
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public SimpleUser actor;

    public TimelineCrossReferencedEvent withActor(SimpleUser actor) {
        this.actor = actor;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public TimelineCrossReferencedEvent withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonProperty("event")
    public String event;

    public TimelineCrossReferencedEvent withEvent(String event) {
        this.event = event;
        return this;
    }
    
    @JsonProperty("source")
    public TimelineCrossReferencedEventSource source;

    public TimelineCrossReferencedEvent withSource(TimelineCrossReferencedEventSource source) {
        this.source = source;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public TimelineCrossReferencedEvent withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    public TimelineCrossReferencedEvent(@JsonProperty("created_at") OffsetDateTime createdAt, @JsonProperty("event") String event, @JsonProperty("source") TimelineCrossReferencedEventSource source, @JsonProperty("updated_at") OffsetDateTime updatedAt) {
        this.createdAt = createdAt;
        this.event = event;
        this.source = source;
        this.updatedAt = updatedAt;
  }
}
