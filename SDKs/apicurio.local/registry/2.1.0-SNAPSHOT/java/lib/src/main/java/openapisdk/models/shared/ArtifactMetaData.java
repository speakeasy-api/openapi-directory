package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ArtifactMetaData {
    @JsonProperty("contentId")
    public Long contentId;
    public ArtifactMetaData withContentId(Long contentId) {
        this.contentId = contentId;
        return this;
    }
    @JsonProperty("createdBy")
    public String createdBy;
    public ArtifactMetaData withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public ArtifactMetaData withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArtifactMetaData withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("globalId")
    public Long globalId;
    public ArtifactMetaData withGlobalId(Long globalId) {
        this.globalId = globalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public ArtifactMetaData withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ArtifactMetaData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public ArtifactMetaData withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("modifiedBy")
    public String modifiedBy;
    public ArtifactMetaData withModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("modifiedOn")
    public OffsetDateTime modifiedOn;
    public ArtifactMetaData withModifiedOn(OffsetDateTime modifiedOn) {
        this.modifiedOn = modifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ArtifactMetaData withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public ArtifactMetaData withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonProperty("state")
    public ArtifactStateEnum state;
    public ArtifactMetaData withState(ArtifactStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("type")
    public ArtifactTypeEnum type;
    public ArtifactMetaData withType(ArtifactTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ArtifactMetaData withVersion(String version) {
        this.version = version;
        return this;
    }
}