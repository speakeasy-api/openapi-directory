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
 * ScoreRevision
 * A score revision metadata
**/
public class ScoreRevision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autosave")
    public Boolean autosave;
    public ScoreRevision withAutosave(Boolean autosave) {
        this.autosave = autosave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators")
    public String[] collaborators;
    public ScoreRevision withCollaborators(String[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ScoreRevision withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ScoreRevision withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public String event;
    public ScoreRevision withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ScoreRevision withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public ScoreRevisionStatistics statistics;
    public ScoreRevision withStatistics(ScoreRevisionStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public ScoreRevision withUser(String user) {
        this.user = user;
        return this;
    }
}