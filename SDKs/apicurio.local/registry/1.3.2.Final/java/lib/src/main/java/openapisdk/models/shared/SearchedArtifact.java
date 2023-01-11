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
 * SearchedArtifact
 * Models a single artifact from the result set returned when searching for artifacts.
**/
public class SearchedArtifact {
    @JsonProperty("createdBy")
    public String createdBy;
    public SearchedArtifact withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public SearchedArtifact withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SearchedArtifact withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SearchedArtifact withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public SearchedArtifact withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedBy")
    public String modifiedBy;
    public SearchedArtifact withModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedOn")
    public OffsetDateTime modifiedOn;
    public SearchedArtifact withModifiedOn(OffsetDateTime modifiedOn) {
        this.modifiedOn = modifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SearchedArtifact withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("state")
    public ArtifactStateEnum state;
    public SearchedArtifact withState(ArtifactStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("type")
    public ArtifactTypeEnum type;
    public SearchedArtifact withType(ArtifactTypeEnum type) {
        this.type = type;
        return this;
    }
}