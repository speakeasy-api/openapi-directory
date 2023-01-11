package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VersionMetaData {
    @JsonProperty("createdBy")
    public String createdBy;
    public VersionMetaData withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public VersionMetaData withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VersionMetaData withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("globalId")
    public Long globalId;
    public VersionMetaData withGlobalId(Long globalId) {
        this.globalId = globalId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public VersionMetaData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public VersionMetaData withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VersionMetaData withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public VersionMetaData withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ArtifactStateEnum state;
    public VersionMetaData withState(ArtifactStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("type")
    public ArtifactTypeEnum type;
    public VersionMetaData withType(ArtifactTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("version")
    public Long version;
    public VersionMetaData withVersion(Long version) {
        this.version = version;
        return this;
    }
}