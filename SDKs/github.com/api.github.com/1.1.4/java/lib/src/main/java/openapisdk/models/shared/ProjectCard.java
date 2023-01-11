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
 * ProjectCard
 * Project cards represent a scope of work.
**/
public class ProjectCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ProjectCard withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("column_url")
    public String columnUrl;
    public ProjectCard withColumnUrl(String columnUrl) {
        this.columnUrl = columnUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_url")
    public String contentUrl;
    public ProjectCard withContentUrl(String contentUrl) {
        this.contentUrl = contentUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ProjectCard withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public ProjectCardSimpleUser creator;
    public ProjectCard withCreator(ProjectCardSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public ProjectCard withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public ProjectCard withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public ProjectCard withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("project_url")
    public String projectUrl;
    public ProjectCard withProjectUrl(String projectUrl) {
        this.projectUrl = projectUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ProjectCard withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProjectCard withUrl(String url) {
        this.url = url;
        return this;
    }
}