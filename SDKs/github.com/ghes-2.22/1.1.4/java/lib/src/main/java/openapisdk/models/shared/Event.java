package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Event
 * Event
**/
public class Event {
    @JsonProperty("actor")
    public Actor actor;
    public Event withActor(Actor actor) {
        this.actor = actor;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Event withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Event withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public Actor org;
    public Event withOrg(Actor org) {
        this.org = org;
        return this;
    }
    @JsonProperty("payload")
    public EventPayload payload;
    public Event withPayload(EventPayload payload) {
        this.payload = payload;
        return this;
    }
    @JsonProperty("public")
    public Boolean public_;
    public Event withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonProperty("repo")
    public EventRepo repo;
    public Event withRepo(EventRepo repo) {
        this.repo = repo;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Event withType(String type) {
        this.type = type;
        return this;
    }
}