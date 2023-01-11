package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SimpleCommitStatus {
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public SimpleCommitStatus withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonProperty("context")
    public String context;
    public SimpleCommitStatus withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SimpleCommitStatus withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public SimpleCommitStatus withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public SimpleCommitStatus withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public SimpleCommitStatus withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public SimpleCommitStatus withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public SimpleCommitStatus withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("target_url")
    public String targetUrl;
    public SimpleCommitStatus withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public SimpleCommitStatus withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public SimpleCommitStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}