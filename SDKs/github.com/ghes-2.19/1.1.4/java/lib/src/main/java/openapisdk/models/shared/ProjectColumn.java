package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ProjectColumn
 * Project columns contain cards of work.
**/
public class ProjectColumn {
    @JsonProperty("cards_url")
    public String cardsUrl;
    public ProjectColumn withCardsUrl(String cardsUrl) {
        this.cardsUrl = cardsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ProjectColumn withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public ProjectColumn withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ProjectColumn withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public ProjectColumn withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("project_url")
    public String projectUrl;
    public ProjectColumn withProjectUrl(String projectUrl) {
        this.projectUrl = projectUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ProjectColumn withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProjectColumn withUrl(String url) {
        this.url = url;
        return this;
    }
}