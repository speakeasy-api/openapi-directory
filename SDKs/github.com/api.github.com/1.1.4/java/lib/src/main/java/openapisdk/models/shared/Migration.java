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
 * Migration
 * A migration.
**/
public class Migration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archive_url")
    public String archiveUrl;
    public Migration withArchiveUrl(String archiveUrl) {
        this.archiveUrl = archiveUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Migration withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude")
    public Object[] exclude;
    public Migration withExclude(Object[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonProperty("exclude_attachments")
    public Boolean excludeAttachments;
    public Migration withExcludeAttachments(Boolean excludeAttachments) {
        this.excludeAttachments = excludeAttachments;
        return this;
    }
    @JsonProperty("guid")
    public String guid;
    public Migration withGuid(String guid) {
        this.guid = guid;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Migration withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("lock_repositories")
    public Boolean lockRepositories;
    public Migration withLockRepositories(Boolean lockRepositories) {
        this.lockRepositories = lockRepositories;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Migration withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("owner")
    public MigrationSimpleUser owner;
    public Migration withOwner(MigrationSimpleUser owner) {
        this.owner = owner;
        return this;
    }
    @JsonProperty("repositories")
    public Repository[] repositories;
    public Migration withRepositories(Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public Migration withState(String state) {
        this.state = state;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Migration withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Migration withUrl(String url) {
        this.url = url;
        return this;
    }
}